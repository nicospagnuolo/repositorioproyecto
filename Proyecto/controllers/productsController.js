const data = require('../data/data');
const db = require('../database/models');
const producto = db.Producto
const{Op} = require('sequelize');


const productscontroller ={
  index: function(req, res,) {
  },
  detalle: function(req,res){
   return res.render("product", {comments: data.comentarios})

  },
  add: function (req,res) {
    return res.render("product-add", {user:data.users})
  },
  findByPk: function(req,res){
    let id =req.params.id;
    let relaciones = {
      include:[
        {association:"comentarios"},
        {association:"usuarios"}
      ]
    }
   producto.findByPk(id,relaciones)
   .then(function(data){
    return res.render("product",{data});
   })

  }
}

module.exports = productscontroller;