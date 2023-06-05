const db = require('../database/models');
const producto = db.Producto
const op = db.Sequelize.Op;

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
        let busqueda =req.query.search;
        let relaciones= {
            include:[
                {association:'userRel'}
            ],
        };
        let criterio ={
            where:[{nombre_del_producto:{[op.like]:"%"+busqueda+"%"}}]
        }
        producto.findAll(criterio)
        .then(data=>res.send({data}))
         //return res.render('results')
      }
}

module.exports = indexController;