var con=require('../config/conexion');
var model=require('../models/model');

module.exports = {
    index: function(req, res){
        model.select(con, "hotel", "", function(err, datos){
            res.render('hotel/index', { hoteles:datos });
        });
        
    },
    create: function(req, res){
        res.render('hotel/create');
    },
    store: function(req, res){
        let campos = "nombre, telefono, numeroPlazas, calle, colonia, cp, ciudad, estado, pais";
        let valores = "'" + req.body.nombre + "', '" + req.body.telefono + "', '" + req.body.numeroPlazas + "', '" +
                    req.body.calle + "', '" + req.body.colonia + "', '" + req.body.cp + "', '" + req.body.ciudad + "', '" + 
                    req.body.estado + "', '" + req.body.pais + "'";
        model.insert(con, "hotel", campos, valores, function(err){
            res.redirect('/hoteles/H');
        });
    },
    delete: function(req, res){
        let condi = "idHotel=" + req.params.idHotel;
        model.delete(con, "hotel", condi, function(err){
            res.redirect('/hoteles/H');
        });
    },
    edit: function(req, res){
        let condi = " and idHotel=" + req.params.idHotel;
        model.select(con, "hotel", condi, function(err, dato){
            res.render('hotel/edit', {row: dato[0]})
        });
    },
    update: function(req, res){
        let campos = "nombre='"+ req.body.nombre +"', telefono='"+ req.body.telefono +"', numeroPlazas='"+ req.body.numeroPlazas +"', calle='"+ req.body.calle +
                "', colonia='"+ req.body.colonia +"', cp='"+ req.body.cp +"', ciudad='"+ req.body.ciudad +"', estado='"+ req.body.estado +"', pais='"+ req.body.pais +"'";
        let condi = "idHotel=" + req.body.idHotel;
        model.update(con, "hotel", campos, condi, function(err){
            res.redirect('/hoteles/H');
        });
    }
}