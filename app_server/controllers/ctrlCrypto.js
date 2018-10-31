const cryptoList = function(req, res){
  res.render('crypto', {
    cryptocurrencies: [{
      name: 'Bitcoin',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      price: 6491.85
    }, {
      name: 'Ethereum',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      price: 219.82
    }, {
      name: 'XRP',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
      price: 0.281145
    }, {
      name: 'Bitcoin Cash',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png',
      price: 447.49
    }, {
      name: 'EOS',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png',
      price: 5.38
    }, {
      name: 'Stellar',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/512.png',
      price: 0.206994
    }, {
      name: 'Litecoin',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png',
      price: 56.01
    }, {
      name: 'Tether',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
      price: 1
    }, {
      name: 'Monero',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
      price: 117.94
    }, {
      name: 'Cardano',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/328.png',
      price: 0.068857
    }]
  });
};

module.exports = {
  cryptoList
} 
