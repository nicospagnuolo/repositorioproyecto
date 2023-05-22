module.exports = function(sequelize,dataTypes){
    let alias = 'Producto';
    let cols={
        id:{
            autoIncrement:true,
            PrimaryKey:true,
            type:dataTypes.INTEGER

        },
        nombre_del_producto:{
            type:dataTypes.STRING
        },
        descripcion:{
            type:dataTypes.STRING
        }
    };
    let config={
    tableName:"productos",
    timestamps: false,
    underscored: true
    }
    let product = sequelize.define(alias,cols,config);
    return product
}
Usuario.associate=function(models,Productos){
    Productos.belongsTo(models.Usuarios,{
        as : "Usuarios",
        foreignKey :"Usuario_id"
    })
}
Producto.associate=function(models){
    Productos.belongsToMany(models,Comentario,{
        as:'comentarios',
        through:'comentario_id',
        foreignKey:'producto_id',
        otherKey:'comentario_id',
        timestamps: false,

    })
  

}