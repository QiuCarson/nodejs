var db = require('../conf/db');
var tables_options='wp_options';
var tables_posts='wp_posts';


module.exports = function indexRecords(req , res , next){
    /*query_options=db.query('SELECT * from ??',[tables_options], function(err, rows, fields) {
        if (err) throw err;
        //console.log('The solution is1: ', rows);
        var arr=new Array();
        for (var i in rows){
            arr[rows[i].option_name]=rows[i].option_value;
        }
        res.render('index', { option: arr});
        
    });*/

/*query_options=db.query('SELECT * from so_options;');
query_options
 .on('result',function(rows) {

        var arr=new Array();
        for (var i in rows){
            arr[rows[i].option_name]=rows[i].option_value;
        }
        res.render('index', { option: arr});
        
    });*/

db.query('SELECT * from so_options limit 10;SELECT * from so_posts ;', function(err, results) {
  if (err) throw err;

  // `results` is an array with one element for every statement in the query:
  console.log(results[0]); // [{1: 1}]
  console.log(results[1]); // [{2: 2}]
});

//res.render('index', { test: "arr"});
  /*      db.query('SELECT * from ?? where `post_status`="publish"',[tables_posts], function(err, rows, fields) {
        if (err) throw err;
           res.render('index', { contentData: rows});
        //res.render('index', { topContent: arr});
        console.log('The solution is1: ', rows);
        });
*/

//问题模板不能渲染两次，即  res.render不能有两个
//没有办法依赖查询，也就是我要办查询1的结果查询2，var return都拿不到值
//双查询也失败
//成功的是一个页面只能查询一个sql?
//
//res.send('respond with a resource');

};