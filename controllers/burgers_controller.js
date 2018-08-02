const routes = require('express').Router();
const orm = require('../config/orm.js')

routes.get('/', (req, res) => {
    orm.selectAllCol('burgers', function (data) {
        let avalBurgers = []
        let eatenBurgers = []
        for (let i = 0; i < data.length; i++) {
            if(data[i].devoured === 0) {
                avalBurgers.push(data[i])
            }
            else {
                eatenBurgers.push(data[i])
            }
        }
        let obj = { burgers: avalBurgers, eatenBurgers: eatenBurgers }
        res.render("index", obj)
    })
});

routes.post('/addBurger', (req, res) => {
    let val = req.body.burger
    orm.insertOne('burgers', 'burger_name', [val], function (data) {
        res.redirect('/')
    })
})

routes.post('/devour', (req, res) => {
    let id = req.body.burger
    orm.updateOne('burgers', 'devoured', '1', 'id', id, function (data) {
        res.redirect('/')
    })
})

module.exports = routes