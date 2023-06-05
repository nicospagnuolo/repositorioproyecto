const db = require('../database/models');
const producto = db.Producto
const{Op} = require('sequelize');

const indexController = {
    index : function(req, res) {
        producto.findAll({
            include:[
                {association: "usuarios"},
                {association:"comentarios"},
            ],
            order:[['created_at', 'DESC']]
        })
        .then(function(data){
          return res.render('index', { data });
          order:[['created_at', 'DESC']]
      })},
      login: function (req, res){
          return res.render('login')
      },
      register: function (req, res){
          return res.render('register')
      },
      results: function (req, res){
          return res.render('results')
      }
}

module.exports = indexController;