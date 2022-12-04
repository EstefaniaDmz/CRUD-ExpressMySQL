var con=require('../config/conexion');
var model=require('../models/model');

module.exports = {
    index: function(req, res){
        model.select(con, "cliente", "", function(err, datos){
            res.render('cliente/index', { clientes:datos });
        });
        
    },
    create: function(req, res){
        res.render('cliente/create');
    },
    store: function(req, res){
        let campos = "nombre, apellidoPaterno, apellidoMaterno, telefono, calle, colonia, cp, idHotel, regimenHotel, idSucursal, idVuelo, claseVuelo";
        let valores = "'" + req.body.nombre + "', '" + req.body.apellidoPaterno + "', '" + req.body.apellidoMaterno + "', '" +
                    req.body.telefono + "', '" + req.body.calle + "', '" + req.body.colonia + "', '" + req.body.cp + "', '" + 
                    req.body.idHotel + "', '" + req.body.regimenHotel + "', '" + req.body.idSucursal + "', '" + req.body.idVuelo + "', '" + req.body.claseVuelo + "'";
        model.insert(con, "cliente", campos, valores, function(err){
            res.redirect('/clientes/C');
        });
    },
    delete: function(req, res){
        let condi = "idCliente=" + req.params.idCliente;
        model.delete(con, "cliente", condi, function(err){
            res.redirect('/clientes/C');
        });
    },
    edit: function(req, res){
        let condi = " and idCliente=" + req.params.idCliente;
        model.select(con, "cliente", condi, function(err, dato){
            res.render('cliente/edit', {row: dato[0]})
        });
    },
    update: function(req, res){
        let campos = "nombre='"+ req.body.nombre +"', apellidoPaterno='"+ req.body.apellidoPaterno +"', apellidoMaterno='"+ req.body.apellidoMaterno +"', telefono='"+ req.body.telefono +
                "', calle='"+ req.body.calle +"', colonia='"+ req.body.colonia +"', cp='"+ req.body.cp +"', idHotel='"+ req.body.idHotel +"', regimenHotel='"+ req.body.regimenHotel +
                "', idSucursal='"+ req.body.idSucursal + "', idVuelo='" + req.body.idVuelo + "', claseVuelo='" + req.body.claseVuelo + "'";
        let condi = "idCliente=" + req.body.idCliente;
        model.update(con, "cliente", campos, condi, function(err){
            res.redirect('/clientes/C');
        });
    }
}