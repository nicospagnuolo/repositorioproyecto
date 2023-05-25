const bcryptjs = require('bcryptjs')
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
        let passEncriptada = bcryptjs.hashSync(req.body.password, 12)
        let user = {
            username:req.body.username,
            email:req.body.email,
            password: passEncriptada,
            foto_perfil: req.body.perfil,
            dni: req.body.dni,
            fecha: req.body.birthdate
        }
        res.send(user)
    }
}

module.exports = usersController;