const data = require('../data/data')
const db = require('../database/models');
const producto = db.Producto
const{Op} = require('sequelize');

const indexController = {
    index : function(req, res) {
        producto.findAll({
            order:[['created_at', 'DESC']]
        })
        .then(function(data){
          return res.render('index', { data });
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