const data = require('../data/data')
const db = require('../database/models/Producto')

const productsController ={
  index: function(req, res,) {
  },
  detalle: function(req,res){
   return res.render("product", {comments: data.comentarios})

  },
  findByPk: function(req,res){
    let id =req.params.id;
    let relaciones = {
      include:[
        {association:"comentarios"},
        {association:"usuarios"}
      ]
    }
   Producto.findByPk(id,relaciones)
   .then(function(data){
    return res.render("detalle",{data:[data]});
   })

  },
  add: function (req,res) {
    res.render("product-add", {user:data.users})
  }
}

module.exports = productsController;