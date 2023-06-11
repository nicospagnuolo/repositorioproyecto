const bcryptjs = require('bcryptjs')
const db = require('../database/models');
const Usuario = db.User


const usersController = {
  profile: function(req, res,) {
    res.render('profile')
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
      } else {
        let criterio = {
          where: [{ email: req.body.email }]
        }
        Usuario.findOne(criterio)
        .then(data=>{
         if(data != null){
          errors.message = "El email ya existe!";
            res.locals.errors = errors;
            res.render("register");
         }else{
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
          res.redirect('/login')

         }
        })

          
          }
    },
      login: (req, res) => {
        res.render('login')
      },
      logout:function(req,res){
        req.session.destroy(),
        res.clearCookie('userId'),
        res.redirect('/')
      },
     
      ingresar: (req, res)=> {
        let errors = {};
        let info = req.body;
        let filtro={ where:[{email:info.email}]};
        
        Usuario.findOne(filtro)
        .then(result=>{
          if (result == null) {
            errors.message = "El mail no está registrado.";
            res.locals.errors = errors;
            res.render("login");
          }
          if(result  !=null){
            let check = bcryptjs.compareSync(info.password, result.password);
            if(check){
              req.session.user = result.dataValues;
            if(info.rememberme){
            res.cookie("userId",result.dataValues.id,{maxAge:1000 *60 *10})
          }
          return res.redirect('/')
        }
            else{
              errors.message = "La contraseña no coincide";
              //Asignamos a locals.error el objeto errors 
              res.locals.errors = errors;
              //renderizamos la vista con el error
              res.render("login");
        }
      }
    })
  }
}
  
module.exports = usersController;