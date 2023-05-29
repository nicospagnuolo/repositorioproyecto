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
   
    
    let product = sequelize.define(alias,cols,config);
    return product

    
    
    
}

