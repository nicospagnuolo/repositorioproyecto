const bcryptjs = require('bcryptjs')
const db = require('../database/models');
const Usuario = db.User
const usersController = {
    profile: function(req,res){
        return res.render('profile', {users:data.user, products: data.products})
    },
    editprofile: function(req,res){
        return res.render('profile-edit', {user:data.user})
    },
    add:function (req, res) {
        res.render('register')
    },
    store:(req, res) => {
        let errors = {};
        if (req.body.username == "") {
          errors.message = "El campo username está vacío";
          res.locals.errors = errors;
          res.render("register");
        } else if (req.body.email == "") {
          errors.message = "El campo email está vacío";
          res.locals.errors = errors;
          res.render("register");
        } else if (req.body.password =="") {
          errors.message = "La contraseña debe tener mas de 3 caracteres.";
          res.locals.errors = errors;
          res.render("register");
        } else if (req.body.perfil == "") {
            errors.message = "El campo foto de perfil está vacío";
            res.locals.errors = errors;
            res.render("register");
        } else if (req.body.birthdate =="") {
            errors.message = "El campo fecha de nacimiento esta vacio.";
            res.locals.errors = errors;
            res.render("register");
        } else if (req.body.dni =="") {
            errors.message = "El campo DNI esta vacio.";
            res.locals.errors = errors;
            res.render("register");
        } else  {
          let criterio = {
            where: [{ email: req.body.email }]
          }
          Usuario.findAll(criterio)
            .then(function(data){
              errors.message = "El email ya existe!";
              res.locals.errors = errors;
              res.render("register");
            }).catch(error => console.log(error))
    
          let passEncriptada = bcryptjs.hashSync(req.body.password, 12);
          let user = {
            username:req.body.username,
            email:req.body.email,
            password: passEncriptada,
            foto_perfil: req.body.perfil,
            dni: req.body.dni,
            fecha_nacimiento: req.body.birthdate
        }
        Usuario.create(user);
        res.redirect('register')
        }
      },
      login: (req, res) => {
        res.render('login')
      },
      ingresar: (req, res)=> {
        let errors = {};
        let info = req.body;
        let filtro = {
          where:[{username:info.username}]
        };
        Usuario.findOne(filtro)
        .then(result=>{
          if (result != null) {
            let check = bcryptjs.compareSync(info.password, result.password)
            if (check) {
              req.session.Usuario = result.dataValues;
              req.locals.Usuario = result.dataValues;
              if (info.recordar) {
                res.cookie("userId", result.dataValues.id,{maxAge:1000 *60 *10})
              }
              return res.redirect('/')
            }
            else {
              errors.message = "La contraseña no concide.";
              res.locals.errors = errors;
              res.render('register')
            }
          }
        })
        
      }
    }
module.exports = usersController;