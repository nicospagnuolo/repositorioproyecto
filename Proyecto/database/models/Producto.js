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
        user_id:{
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
    
    const Producto = sequelize.define(alias,cols,config)
    Producto.associate = function(models){
        Producto.belongsTo(models.User,{
            as:'userRel',
            foreignKey:'User_id'
        })
    }
 
   
    return Producto
}


    
    
    


