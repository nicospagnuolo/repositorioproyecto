module.exports=function(sequelize,dataTypes){
    let alias = 'User';
    let cols={
        id:{
            autoIncrement:true,
            primaryKey:true,
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
        foto_perfil:{
            type:dataTypes.STRING
        },
        fecha_nacimiento:{
            type:dataTypes.DATE
        },
        dni:{
            type:dataTypes.INTEGER
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
    let config ={
        tableName:"usuarios1",
        timestamps: false,
        underscored: true
    }
    let user = sequelize.define(alias,cols,config);
    return user
};

