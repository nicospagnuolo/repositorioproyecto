const data = require('../data/data')


const productsController ={
     
  detalle: function(req,res){
   res.render("product", {comments: data.comentarios} )

  },
  add: function (req,res) {
    res.render("product-add", {user:data.users})
  }
}

module.exports = productsController;