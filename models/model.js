module.exports={
    select: function(conexion, tabla, condicion, funcion){
        conexion.query("SELECT * FROM "+ tabla +" WHERE estatus=1" + condicion, funcion);
    },
    insert: function(conexion, tabla, campos, datos, funcion){
        conexion.query("INSERT INTO "+ tabla +"("+ campos +") VALUES("+datos+")", funcion);
    },
    delete: function(conexion, tabla, condicion, funcion){
        conexion.query("UPDATE "+ tabla +" SET estatus=0 WHERE " + condicion, funcion);
    },
    update: function(conexion, tabla, campos, condicion, funcion){
        conexion.query("UPDATE " + tabla + " SET " + campos + " WHERE " + condicion, funcion);
    }
}