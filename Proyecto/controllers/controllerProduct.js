
const controlador = {
	index: function (req, res) {
   	return res.render('product');
	 
},
	results:function (req, res) {
	return res.render('results');
},
	productadd:function (req, res) {
	return res.render('product-add');
},


};



module.exports = controlador;
