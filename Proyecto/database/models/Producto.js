module.exports = function(sequelize,dataTypes){
    let alias = 'Producto';
    let cols={
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER

        },
        imagen:{
            type:dataTypes.STRING
        },
        id_usuario:{
            type:dataTypes.INTEGER
        },
        nombre_del_producto:{
            type:dataTypes.STRING
        },
        descrip_producto:{
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
    tableName:"productos",
    timestamps: false,
    underscored: true
    }
    Producto.associate = function(models){
        product.hasMany(models.Comentario,{
            as:"comentarios",
            foreignkey:"comentario_id"
        })
        product.associate = function(models){
            product.belongsTo(models.Usuarios,{
                as:"usuarios",
                foreignkey:"usuario_id"
            })
    const product = sequelize.define(alias,cols,config);
 
  
    return product
    }
}}


    
    
    


