const controlador = {
	index: function (req, res) {
   	return res.render('profile');
},
edit: function (req, res) {
    return res.render('profile-edit');
},
show:function (req, res) {
   	return res.render('login');
},
create:function (req, res) {
    return res.render('register');
},


};



module.exports = controlador;