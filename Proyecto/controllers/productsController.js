const db = require("../database/models");
const Producto = db.Producto;
const Comentario = db.Comentario;
const { Op } = require("sequelize");

const productscontroller = {
  index: function (req, res) {
    res.render("product");
  },
  editproduct: (req, res) => {
    Producto.findOne({
      where: [{ id: req.params.id }],
    }).then((data) => {
      return res.render("productedit", { data: data });
    });
  },
  add: function (req, res) {
    res.render("product-add");
  },
  newcoment:function (req, res) {
    let errors = {};
    if (req.body.comentario == "") {
      errors.message = "El campo comentario está vacío.";
      res.locals.errors = errors;
      res.render("/");
    } else {
      let comentario = {
        id_producto: req.body.product_id,
        id_usuario: req.body.user_id,
        nombre_usuario: req.body.nombre,
        texto_comentario: req.body.comentario,
      };
      Comentario.create(comentario);
      res.redirect("/");
    }
  },
  store: function (req, res) {
    let errors = {};
    if (req.body.image == "") {
      errors.message = "El campo imagen está vacío.";
      res.locals.errors = errors;
      res.render("product-add");
    } else if (req.body.name == "") {
      errors.message = "El campo name está vacío.";
      res.locals.errors = errors;
      res.render("product-add");
    } else if (req.body.description == "") {
      errors.message = "El campo descripcion esta vacio.";
      res.locals.errors = errors;
      res.render("product-add");
    } else {
      let product = {
        imagen: req.body.image,
        user_id: req.body.id,
        nombre_del_producto: req.body.name,
        descrip_producto: req.body.description,
      };
      Producto.create(product);
      res.redirect("/");
    }
  },
  findByPk: function (req, res, next) {
    let id = req.params.id;
    let criterio = {
        where: { id: id },
        include: [
          { association: "userRel"}]}
    ;
    Producto.findOne(criterio)
      .then(function (data) {
        
        return res.render("product", { data: [data] });
      })
      .catch(function (err) {
        console.log(err);
      });
 
    // let criterio = {
    //   where: { id: id },
    //   include: [
    //     { association: "comentarioProdu", include: [{ association: "comentarioUs" } ]}
    //   ]
    // }
  },
  comentario: function (req, res) {
    let errors = {};
    if (req.body.coment == "") {
      errors.message = "El campo comentario está vacío";
      res.locals.errors = errors;
      res.render("product");
    } else {
      let comentario = {
        id_producto: req.body.id_producto,
        id_usuario: req.body.id_usuario,
        nombre_usuario: req.body.nombre_usuario,
        texto_comentario: req.body.coment,
      };
      Comentario.create(comentario);
      res.redirect("/");
    }
  },
  update:function(req,res){
    
    Producto.update( {
      imagen: req.body.image,
      nombre_del_producto: req.body.name,
      descrip_producto: req.body.description,
    },{where:{id:req.params.id}}
      
    )
    return res.redirect('/')
  },
  actualizar:function (req, res) {
    return res.render("product");
  },
  delete: function(req,res){
    Producto.findOne({
      where: {
        id:req.params.id
      },
   })
    return res.redirect('/')
  },
  lista: function(req,res){
    let criterio = {
      where: { id: id },
      include: [
        { association: "userRel"}]}
  ;
    Producto.findAll(criterio)
    .then (function(data){
      return res.render('profile',{data:[data]})
    })
  }
  // lista:function(req,res){

    
  //     let id = req.params.id
  //     let criterio = {
  //       where: { id: id },
  //       include: [
  //         { association: "userRel"}]}

  //   }
  //   Producto.findAll(criterio)
  //   .then(function(data){

  //   }
  // }
  }
  // update:function (req, res) {
  //   let errors = {};
  //   if (req.body.image == "") {
  //     errors.message = "El campo imagen está vacío.";
  //     res.locals.errors = errors;
  //     res.render("product-add");
  //   } else if (req.body.name == "") {
  //     errors.message = "El campo name está vacío.";
  //     res.locals.errors = errors;
  //     res.render("product-add");
  //   } else if (req.body.description == "") {
  //     errors.message = "El campo descripcion esta vacio.";
  //     res.locals.errors = errors;
  //     res.render("product-add");
  //   } else {
  //     let product = {
  //       imagen: req.body.image,
  //       user_id: req.body.id,
  //       nombre_del_producto: req.body.name,
  //       descrip_producto: req.body.description,
  //     };
  //     Producto.create(product);
  //     res.redirect("/");
    
  
;

module.exports = productscontroller;
