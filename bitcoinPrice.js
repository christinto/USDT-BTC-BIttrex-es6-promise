// write with express and and bootstrapped front end . COMPLETE
//NEW TASKS: 1 --- DISPLAY ON EXPRESS ENDPOINT
//       2--- WIRE IN NODEMAILER ON PRICE BELOW TARGE
const express = require('express');
const request = require('request');
const app = express();

const port = 3035;
/*
app.get('/', function(req, res) {
  res.send('SDAAFA');
});
*/
/* LIKE THIS
//like the first example, call request
request({
  url: "https://blockchain.info/stats?format=json",
  json: true
}, function(error, response, body) {
  ubqPayouts = body.paymentsTotal;
});


app.get("/", function(req, res) {
  res.send("Ubq miner payouts! " + ubqPayouts + " hell yeah");
});

*/


//Using USDT tether as proxy price for $USD.
//https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC
//gonna try refashion resolve object lastprice: etc.. to var lastprice.
var bitcoin = (coin) => {
    return new Promise((resolve, reject) => {
      var encodedCoin = encodeURIComponent(coin);
  
      request({
        url: `https://bittrex.com/api/v1.1/public/getticker?market=${encodedCoin}`,
        json: true
      }, (error, response, body) => {
        if (error) {
          reject('Unable to connect to Bittrex servers.');
        } else if (body.result.Last != '') {
          //resolve({
          resolve(
            lastprice = body.result.Last
            
            //lastprice: body.result.Last,
            //bidPrice: body.result.Bid,
            //askPrice: body.result.Ask
          //});
          );
        }
      });
    });
  };
  
      // console.log(JSON.stringify(result));
      bitcoin('USDT-BTC').then((lastprice) => {
    console.log(JSON.stringify(lastprice));
    //CREATE RESPONSE FOR A VAR HERE FOR ENDPOINT DISPLAY?
  }, (errorMessage) => { 
    console.log(errorMessage);
  });
  

app.get("/", function(req, res) {
  res.send(lastprice);
});

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
