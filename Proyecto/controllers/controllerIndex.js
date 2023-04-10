const controlador = {
	index: function (req, res) {
   	return res.render('index');
},
results:function (req, res) {
	return res.render('results');
},
};



module.exports = controlador;
