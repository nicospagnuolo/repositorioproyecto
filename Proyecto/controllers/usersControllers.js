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
    store:(req, res)=>{
        if (req.body.password.length>3)
         {  let passEncriptada = bcryptjs.hashSync(req.body.password, 12)
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
            
        }else{
           
        }

    }
}

module.exports = usersController;