
/*
 * GET home page.
 */
var CoinKey = require('coinkey');
var ck = new CoinKey();

exports.index = function(req, res){
  res.render('index', { 
  	WIF: 'Here is a random key in Wallet Import Format: ' + ck.privateWif,
  	ADDY: 'Here is a the Address: ' + ck.publicAddress
  });
};