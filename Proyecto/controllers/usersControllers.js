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
          res.render("/register");
        } else if (req.body.email == "") {
          errors.message = "El campo email está vacío";
          res.locals.errors = errors;
          res.render("/register");
        } else if (req.body.password.lenght < 3) {
          errors.message = "La contraseña debe tener mas de tres caracteres.";
          res.locals.errors = errors;
          res.render("/register");
        } else {
          let criterio = {
            where: [{ email: req.body.email }]
          }
          Usuario.findAll(criterio)
            .then(data => {
              errors.message = "El email ya existe!";
              res.locals.errors = errors;
              res.render("/register");
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
        res.redirect('/register')
        }
      }
}

module.exports = usersController;