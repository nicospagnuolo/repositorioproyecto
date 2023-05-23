const data = require('../data/data')


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
   Producto.findByPk(id,relaciones)
   .then(function(data){
    return res.render("detalle",{data:[data]});
   })

  }
}

module.exports = productscontroller;