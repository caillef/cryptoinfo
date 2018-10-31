const eventsList = function (req, res) {
  res.render('events', {
    events: [{
      date: '26/09/2018 19:30',
      name: 'Meetup for crypto-enthusiasts (Espoo)'
    }, {
      date: '30/09/2018 14:00',
      name: 'Blockchain for Beginners (Helsinki)'
    }, {
      date: '04/10/2018 19:00',
      name: 'Investors - How can you invest in crypto-currencies (Helsinki)'
    }, {
      date: '07/10/2018 14:00',
      name: 'Seminar impact of blockchain technology on industries (Helsinki)'
    }]

  });
};

module.exports = {
  eventsList
}