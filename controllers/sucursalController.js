var con=require('../config/conexion');
var model=require('../models/model');

module.exports = {
    index: function(req, res){
        model.select(con, "sucursal", "", function(err, datos){
            res.render('sucursal/index', { sucursales:datos });
        });
        
    },
    create: function(req, res){
        res.render('sucursal/create');
    },
    store: function(req, res){
        let campos = "nombre, telefono, numeroPlazas, calle, colonia, cp";
        let valores = "'" + req.body.nombre + "', '" + req.body.telefono + "', '" + req.body.numeroPlazas + "', '" +
                    req.body.calle + "', '" + req.body.colonia + "', '" + req.body.cp + "'";
        model.insert(con, "sucursal", campos, valores, function(err){
            res.redirect('/sucursales/S');
        });
    },
    delete: function(req, res){
        let condi = "idSucursal=" + req.params.idSucursal;
        model.delete(con, "sucursal", condi, function(err){
            res.redirect('/sucursales/S');
        });
    },
    edit: function(req, res){
        let condi = " and idSucursal=" + req.params.idSucursal;
        model.select(con, "sucursal", condi, function(err, dato){
            res.render('sucursal/edit', {row: dato[0]})
        });
    },
    update: function(req, res){
        let campos = "nombre='"+ req.body.nombre +"', telefono='"+ req.body.telefono +"', numeroPlazas='"+ req.body.numeroPlazas +"', calle='"+ req.body.calle +
                "', colonia='"+ req.body.colonia +"', cp='"+ req.body.cp +"'";
        let condi = "idSucursal=" + req.body.idSucursal;
        model.update(con, "sucursal", campos, condi, function(err){
            res.redirect('/sucursales/S');
        });
    }
}