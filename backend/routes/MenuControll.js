const Menu = require('../models/Menu');
function MenuController() {

    return {
    
    async index(req, res) {
    
    const foodcarts = await Menu.find()
    console.log(foodcarts)
    return res.render('home', { foodcarts: foodcarts })
    
    }
}
}
    
    module.exports = MenuController
