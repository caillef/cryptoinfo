const cryptoList = function(req, res){
  res.render('crypto', {
    cryptocurrencies: [{
      name: 'Bitcoin',
      price: 6491.85
    }, {
      name: 'Ethereum',
      price: 219.82
    }, {
      name: 'XRP',
      price: 0.281145
    }, {
      name: 'Bitcoin Cash',
      price: 447.49
    }, {
      name: 'EOS',
      price: 5.38
    }, {
      name: 'Stellar',
      price: 0.206994
    }, {
      name: 'Litecoin',
      price: 56.01
    }, {
      name: 'Tether',
      price: 1
    }, {
      name: 'Monero',
      price: 117.94
    }, {
      name: 'Cardano',
      price: 0.068857
    }]
  });
};

module.exports = {
  cryptoList
} 
