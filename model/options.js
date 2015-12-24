var db = require('../conf/db');

var tables='so_options';

exports.optionlist=function optionlist(req){
    /*db.query('SELECT * from ?? where option_name=?',[tables,req.name], function(err, rows, fields) {
      if (err) throw err;
       // res.render('index', { data: rows });
        
    });*/
//console.log('The solution is: ', req.name);
    db.query('SELECT * from ?? where option_name=?',[tables,req.name], function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is1: ', rows);
        
        
    });
    console.log('The solution is2: ');
    //return req;
}





