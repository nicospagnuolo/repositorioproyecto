
const controlador = {
	index: function (req, res) {
   	return res.render('product');
	 
},
	results:function (req, res) {
	return res.render('search-results');
},
	create:function (req, res) {
	return res.render('product-add');
},


};



module.exports = controlador;
