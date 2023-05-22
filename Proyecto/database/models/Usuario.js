module.exports=function(sequelize,dataTypes){
    let alias = 'Usuario';
    let cols={
        id:{
            autoIncrement:true,
            PrimaryKey:true,
            type:dataTypes.INTEGER

        },
        username:{
            type:dataTypes.STRING
        },
        email:{
            type:dataTypes.STRING
        },
        password:{
            type:dataTypes.STRING
        },
        fecha_nacimiento:{
            type:dataTypes.DATE
        },
        dni:{
            type:dataTypes.INTEGER
        }


    };
    let config ={
        tableName:"users",
        timestamps: false,
        underscored: true
    }
    let user = sequelize.define(alias,cols,config);
    return user
}
Producto.associate=function(models,Usuarios){
    Usuarios.belongsTo(models.Productos,{
        as : "Productos",
        foreignKey :"Producto_id"

    })
}

