const db = require('../database/models');
const Producto = db.Producto
const Comentario = db.Comentario
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
        Producto.create(product);
        res.redirect('/')
      }
  },
  findByPk: function(req,res, next){
    let id = req.params.id;
    let criterio = {where:{id:id}}
    Producto.findOne(criterio)
    .then(function(data){
      return res.render("product",{data:[data]})
    })
    .catch(function(err){console.log(err)})
//     Comentario.findAll({
//       include:[{association:'comentarioRel'}],
//       order:[['created_at', 'DESC']]
//   })
//   .then(function(data){
//     return res.render('product', {comentario:[data]});
// })
  },
  comentario: function(req, res){
    let errors = {};
    if (req.body.coment == "") {
      errors.message = "El campo comentario está vacío";
      res.locals.errors = errors;
      res.render("product");
    }  else {
  
      let comentario = {
        id_producto:req.body.id_producto,
        id_usuario:req.body.id_usuario,
        nombre_usuario:req.body.nombre_usuario,
        texto_comentario: req.body.coment,
      }
      Comentario.create(comentario);
      res.redirect('/')
    }
}
    
  }
  
module.exports = productscontroller;    