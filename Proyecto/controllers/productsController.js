const db = require('../database/models/Producto');
const Producto = db.Producto
const{Op} = require('sequelize');


const productscontroller ={
  index: function(req, res,) {
    res.send("hola")
  },
  detalle: function(req,res){
    let id = req.params.id;
    for (let i = 0; i < producto; i++) {
      if(id == producto[i].id){
        return res.render('product',{id})
      }
    }
  },
  add:function (req, res) {
    res.render('product-add')
},
store:function(req, res){
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
      Producto.create(product);
      res.redirect('product')
    }
  },
  findByPk: function(req,res){
    let id =req.params.id;
    let criterio = {where:{id:id}}
    
   Producto.findOne(criterio)
   .then(function(data){
    return res.render("product",{data:[data]});
   })
   .catch(function(err){console.log(err)})

  },

    
  }
  


module.exports = productscontroller;