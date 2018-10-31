db.dropDatabase();

db.events.save(
    [{
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
)

db.cryptocurrencies.save(
    [{
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
)