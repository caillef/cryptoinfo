const mongoose = require('mongoose')

const cryptoModel = mongoose.model('cryptocurrencies')

const cryptoList = (req, res) => {
  cryptoModel.find({}, (err, crypto) => {
    if (err) {
      res.status(404).json(err)
    } else {
      res.status(200).json(crypto)
    }
  })
};

const addCrypto = (req, res) => {
  cryptoModel.create(req.body, (err, newCrypto) => {
    if (err) {
      res.status(404).json(err)
    } else {
      res.status(201).json(newCrypto)
    }
  })
}

const removeCrypto = (req, res) => {
  cryptoModel.deleteOne(req.body, (err, deleteStatus) => {
    if (err) {
      res.status(404).json(err)
    } else {
      res.status(201).json(deleteStatus)
    }
  })
}

module.exports = {
  cryptoList,
  addCrypto,
  removeCrypto
} 
