const mongoose = require('mongoose')

const eventsModel = mongoose.model('events')

const eventsList = (req, res) => {
  eventsModel.find({}, (err, events) => {
    if (err) {
      res.status(404).json(err)
    } else {
      res.status(200).json(events)
    }
  })
};

const addEvent = (req, res) => {
  eventsModel.create(req.body, (err, newEvent) => {
    if (err) {
      res.status(404).json(err)
    } else {
      res.status(201).json(newEvent)
    }
  })
}

module.exports = {
  eventsList,
  addEvent
} 
