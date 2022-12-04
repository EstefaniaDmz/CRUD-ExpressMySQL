var con=require('../config/conexion');
var model=require('../models/model');

module.exports = {
    index: function(req, res){
        model.select(con, "vuelo", "", function(err, datos){
            res.render('vuelo/index', { vuelos:datos });
        });
        
    },
    create: function(req, res){
        res.render('vuelo/create');
    },
    store: function(req, res){
        let campos = "fecha, hora, plazasTotales, ciudadOrigen, estadoOrigen, paisOrigen, ciudadDestino, estadoDestino, paisDestino";
        let valores = "'" + req.body.fecha + "', '" + req.body.hora + "', '" + req.body.plazasTotales + "', '" +
                    req.body.ciudadOrigen + "', '" + req.body.estadoOrigen + "', '" + req.body.paisOrigen + "', '" + req.body.ciudadDestino + "', '" + 
                    req.body.estadoDestino + "', '" + req.body.paisDestino + "'";
        model.insert(con, "vuelo", campos, valores, function(err){
            res.redirect('/vuelos/V');
        });
    },
    delete: function(req, res){
        let condi = "idVuelo=" + req.params.idVuelo;
        model.delete(con, "vuelo", condi, function(err){
            res.redirect('/vuelos/V');
        });
    },
    edit: function(req, res){
        let condi = " and idVuelo=" + req.params.idVuelo;
        model.select(con, "vuelo", condi, function(err, dato){
            res.render('vuelo/edit', {row: dato[0]})
        });
    },
    update: function(req, res){
        let campos = "fecha='"+ req.body.fecha +"', hora='"+ req.body.hora +"', plazasTotales='"+ req.body.plazasTotales +"', ciudadOrigen='"+ req.body.ciudadOrigen +
                "', estadoOrigen='"+ req.body.estadoOrigen +"', paisOrigen='"+ req.body.paisOrigen +"', ciudadDestino='"+ req.body.ciudadDestino +"', estadoDestino='"+ req.body.estadoDestino +"', paisDestino='"+ req.body.paisDestino +"'";
        let condi = "idVuelo=" + req.body.idVuelo;
        model.update(con, "vuelo", campos, condi, function(err){
            res.redirect('/vuelos/V');
        });
    }
}