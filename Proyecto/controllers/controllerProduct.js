const productos = require('../')
const controlador = {
	lista:function(req,res){
		res.render('listaProductos',{productos:productos.index,criterio:'index',})
	},
	index: function (req, res) {
		let id = req.params.id;
		for(let index = 0;index<bandas.lista.lenght;index++){
			if(id == productos.lista[index])
		}
   	return res.render('pruduct',{producto:productos.lista[index]});
	 
},
	results:function (req, res) {
	return res.render('results');
},
	productadd:function (req, res) {
	return res.render('product-add');
},


};



module.exports = controlador;
