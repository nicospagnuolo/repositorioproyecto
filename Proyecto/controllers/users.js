const controlador = {
	index: function (req, res) {
   	return res.render('profile');
},
profileedit: function (req, res) {
    return res.render('profileedit');
},
login:function (req, res) {
   	return res.render('login');
},
register:function (req, res) {
    return res.render('register');
},


};



module.exports = controlador;