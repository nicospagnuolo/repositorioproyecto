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
  add:function (req, res) {
    res.render('product-add')
},
store:(req, res) => {
    let errors = {};
    if (req.body.image == "") {
      errors.message = "El campo imagen está vacío";
      res.locals.errors = errors;
      res.render("product-add");
    } else if (req.body.name == "") {
      errors.message = "El campo name está vacío";
      res.locals.errors = errors;
      res.render("product-add");
    } else if (req.body.description =="") {
      errors.message = "El campo descripcion esta vacio.";
      res.locals.errors = errors;
      res.render("product-add");
    }  else {
   

      
      let product = {
        imagen:req.body.image,
        nombre_del_producto:req.body.name,
        descrip_producto: req.body.description,

    }
    producto.create(product);
    res.redirect('product-add')
    }
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

  },

    
  }
  


module.exports = productscontroller;