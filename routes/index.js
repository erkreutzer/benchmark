
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.grid = function(req, res) {
    res.render('grid');
}

exports.chart = function(req, res) {
    res.render('charts');
}