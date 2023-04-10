const controlador = {
	index: function (req, res) {
   	return res.render('index de productos');
},
show:function (req, res) {
	return res.render('home');
},
};



module.exports = controlador;
