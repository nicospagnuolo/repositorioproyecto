const db = require('../database/models');
const Producto = db.Producto
const{Op} = require('sequelize');



const productscontroller ={
  index: function(req, res,) {
    res.render("product")
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
        user_id:req.body.id,
        nombre_del_producto:req.body.name,
        descrip_producto: req.body.description,
      }
      console.log(product);
      Producto.create(product);
      res.redirect('/product')
    }
  },
  // findByPk: function(req,res){
  //   let id =req.params.id;
  //   let criterio ={ where:[{id:id}]} 
  //  Producto.findOne(criterio)
  //  .then(function(data){
  //   return res.render("product",{data:[data]});
  //  })
  //  .catch(function(err){console.log(err)})

  // },
findByPk: function(req,res, next){
  let id = req.params.id;
  let criterio = {where:{id:id}}
  Producto.findOne(criterio)
  .then(function(data){
    return res.render("product",{data:[data]})
  })
  .catch(function(err){console.log(err)})
}
    
  }
  


module.exports = productscontroller;