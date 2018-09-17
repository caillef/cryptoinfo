const winnerlist = function(req, res){
  res.render('football', {
    winners: [{
      date: 1990,
      country: 'Germany'
    }, {
      date: 1994,
      country: 'Brazil'
    }, {
      date: 1998,
      country: 'France'
    }, {
      date: 2002,
      country: 'Brazil'
    }, {
      date: 2006,
      country: 'Italy'
    }, {
      date: 2010,
      country: 'Spain'
    }, {
      date: 2014,
      country: 'Germany'
    }, {
      date: 2018,
      country: 'France'
    }]
  });
};

module.exports = {
  winnerlist
} 
