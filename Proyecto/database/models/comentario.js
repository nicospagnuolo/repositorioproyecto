module.exports = function(sequelize,dataTypes){
    let alias = 'Comentario';
    let cols={
        id:{
            autoIncrement:true,
            primaryKey:true,
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
    
    comentario.associate = function(models){
        comentario.belongsTo(models.Producto,{
            as:"productos",
            foreignkey:"producto_id"
        })
    }


        return comentario


}