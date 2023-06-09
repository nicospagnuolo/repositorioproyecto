module.exports = function(sequelize,dataTypes){
    let alias = 'Comentario';
    let cols={
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER

        },
        id_producto:{
            type:dataTypes.INTEGER
        },
        id_usuario:{
            type:dataTypes.INTEGER
        },
        nombre_usuario:{
            type:dataTypes.STRING
        },
        texto_comentario:{
            type:dataTypes.STRING
        },
        claves:{
            type:dataTypes.STRING
        },
        created_at:{
            type:dataTypes.DATE,
            allowNull: true
        },
        updated_at:{
            type:dataTypes.DATE,
            allowNull: true
        },
        deleted_at:{
            type:dataTypes.DATE,
            allowNull: true
        }
    };
    let config={
    tableName:"comentarios",
    timestamps: false,
    underscored: true
    }
    let Comentario = sequelize.define(alias,cols,config);
    
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Producto,{
            as:"comentarioProdu",
            foreignKey :"id_producto",
        }),
        Comentario.belongsTo(models.User,{
            as:"comentarioUs",
            foreignKey :"id_usuario",
            
        })
    }


        return Comentario
}