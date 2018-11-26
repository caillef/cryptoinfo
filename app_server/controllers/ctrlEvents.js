const request = require('request')
const apiURL = require('./apiURLs')

const showForm = (req, res) => {
  res.render('event_add')
}

const eventsList = function(req, res){
  const path = '/api/events'
  const requestOptions = {
    url: `${apiURL.server}${path}`,
    method: 'GET',
    json: {},
    qs: {}
  }

  request(
    requestOptions,
    (err, response, body) => {
      if (err) {
        res.render('error', {message: err.message})
      } else if (response.statusCode !== 200) {
        res.render('error', {message: `Error accessing API : ${response.statusMessage} (${response.statusCode})`})
      } else if (!(body instanceof Array)) {
        res.render('error', {message: 'Unexpected response data'})
      } else if (!body.length) {
        res.render('error', {message: 'No documents in collection'})
      } else {
        res.render('events', {events: body})
      }
    }
  )
};



const addData = (req, res) => {
  const path = '/api/events';

  const postdata = {
    name: req.body.name,
    date: req.body.date
  }

  const requestOptions = {
    url: `${apiURL.server}${path}`,
    method: 'POST',
    json: postdata,
  }
  request(
    requestOptions,
    (err, response, body) => {
      if (response.statusCode === 201) {
        req.method = 'GET';
        res.redirect('/events');
      } else {
        res.render('error', {
          message: `Error adding data: ${response.statusMessage} (${response.statusCode})`
        });
      }
    }
  )
}

module.exports = {
  eventsList,
  addData,
  showForm
}