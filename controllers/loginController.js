var con=require('../config/conexion');
var model=require('../models/model');

module.exports = {
    index: function(req, res){
        res.render('login');
    },
    login: function(req, res){
        let condi = " and correo='" + req.body.correo + "' and clave='" + req.body.clave + "'";
        model.select(con, "usuario", condi, function(err, dato){
            if(dato.length > 0 && dato.length < 2){
                res.render('home');
            }
            else{
                res.render('login', {message: "Datos incorrectos"})
            }
        });
    }
}