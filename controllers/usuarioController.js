var con=require('../config/conexion');
var model=require('../models/model');

module.exports = {
    index: function(req, res){
        model.select(con, "usuario", "", function(err, datos){
            res.render('usuario/index', { usuarios:datos });
        });
        
    },
    create: function(req, res){
        res.render('usuario/create');
    },
    store: function(req, res){
        let email = " and correo='" + req.body.correo + "'";
        model.select(con, "usuario", email, function(err, dato){
            if(dato.length > 0){
                res.render('usuario/create', {message: "El correo ya está registrado"});
            } else {
                if(req.body.clave == req.body.claveB){
                    let campos = "nombre, apellidoPaterno, apellidoMaterno, correo, clave";
                    let valores = "'" + req.body.nombre + "', '" + req.body.apellidoPaterno + "', '" + req.body.apellidoMaterno + "', '" +
                        req.body.correo + "', '" + req.body.clave + "'";
                    model.insert(con, "usuario", campos, valores, function(err){
                    res.redirect('/usuarios/U');
                });
                } else {
                    res.render('usuario/create', {message: "Favor de verificar las contraseñas"});
                }
            }
        });
        
    },
    delete: function(req, res){
        let condi = "idUsuario=" + req.params.idUsuario;
        model.delete(con, "usuario", condi, function(err){
            res.redirect('/usuarios/U');
        });
    },
    edit: function(req, res){
        let condi = " and idUsuario=" + req.params.idUsuario;
        model.select(con, "usuario", condi, function(err, dato){
            res.render('usuario/edit', {row: dato[0]})
        });
    },
    update: function(req, res){
        let email = " and correo='" + req.body.correo + "'";
        model.select(con, "usuario", email, function(err, dato){
            if(dato.length > 0 && dato[0].idUsuario != req.params.idUsuario){
                model.select(con, "usuario", " and idUsuario=" + req.params.idUsuario, function(err, dato){
                res.render('usuario/edit', {row: dato[0], message: "El correo electrónico ya está registrado"})
                });
            }
            else {
                if(req.body.pass == req.body.clave){
                    if(req.body.claveNva == req.body.claveNvaB){
                        let campos = "nombre='"+ req.body.nombre +"', apellidoPaterno='"+ req.body.apellidoPaterno +"', apellidoMaterno='"+ req.body.apellidoMaterno +"', correo='"+ req.body.correo + "', clave='" + req.body.claveNva +"'";
                        let condi = "idUsuario=" + req.body.idUsuario;
                        model.update(con, "usuario", campos, condi, function(err){
                        res.redirect('/usuarios/U');
                        });
                    } else{
                        model.select(con, "usuario", " and idUsuario=" + req.params.idUsuario, function(err, dato){
                            res.render('usuario/edit', {row: dato[0], message: "La contraseña nueva no concuerda con la repitición de contraseña"})
                        });
                    }
                } else {
                    model.select(con, "usuario", " and idUsuario=" + req.params.idUsuario, function(err, dato){
                        res.render('usuario/edit', {row: dato[0], message: "La contraseña antigua no concuerda"})
                    });
                }
            }
        });
    }
}