module.exports = function(sequelize,dataTypes){
    let alias = 'Comentario';
    let cols={
        id:{
            autoIncrement:true,
            PrimaryKey:true,
            type:dataTypes.INTEGER

        },
        id_usuario:{
            type:dataTypes.STRING
        },
        texto_comentario:{
            type:dataTypes.STRING
        }
    };
    let config={
    tableName:"comentarios",
    timestamps: false,
    underscored: true
    }
    let comentario = sequelize.define(alias,cols,config);
    return comentario

}
Comentario.associate=function(models){
    Comentarios.belongsToMany(models,Productos,{
        as:'productos',
        through:'comentario_id',
        foreignKey:'comentario_id',
        otherKey:'producto_id',
        timestamps: false,

    })
  
}
