const winnerlist = function (req, res) {
  res.render('goldenball', {
    winners: [{
      date: 1990,
      name: 'Salvatore Schillaci',
      country: 'Italy'
    }, {
      date: 1994,
      name: 'Romario',
      country: 'Brazil'
    }, {
      date: 1998,
      name: 'Ronaldo',
      country: 'Brazil'
    }, {
      date: 2002,
      name: 'Oliver Kahn',
      country: 'Germany'
    }, {
      date: 2006,
      name: 'Zinedine Zidane',
      country: 'France'
    }, {
      date: 2010,
      name: 'Diago Forlan',
      country: 'Uruguay'
    }, {
      date: 2014,
      name: 'Lionel Messi',
      country: 'Argentina'
    }, {
      date: 2018,
      name: 'Luka Modric',
      country: 'Croacia'
    }]

  });
};

module.exports = {
  winnerlist
}