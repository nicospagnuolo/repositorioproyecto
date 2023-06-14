const db = require('../database/models');
const producto = db.Producto
const usuario = db.User
const op = db.Sequelize.Op;

const indexController = {
    index : function(req, res) {
        producto.findAll({
            include:[{association:'userRel'}],
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
        let busqueda =req.query.search;
        let criterio ={
            where:[{nombre_del_producto:{[op.like]:"%"+busqueda+"%"}}],
            where:[{descrip_producto:{[op.like]:"%"+busqueda+"%"}}],

            include:[{association:'userRel'}], 
            order:[['created_at', 'DESC']]
        }
        producto.findAll(criterio)
        .then(function (data) {
            return res.render('results', {data:data})
        })
         
      },
      resultsUser: function (req, res){
        let busqueda =req.query.search2;
        let criterio ={
            where:[{username:{[op.like]:"%"+busqueda+"%"}}],

            
        }
        usuario.findAll(criterio)
        .then(function (data) {
            return res.render('resultsUser', {data:data})
        })
         
      }
}

module.exports = indexController;