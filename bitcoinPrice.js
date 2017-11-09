// write with express and and bootstrapped front end . COMPLETE
//NEW TASKS: 1 --- DISPLAY ON EXPRESS ENDPOINT
//       2--- WIRE IN NODEMAILER ON PRICE BELOW TARGE
const express = require('express');
const request = require('request');
const app = express();

const port = 3035;
/* We're res sending the promise response :)
app.get('/', function(req, res) {
  res.send('SDAAFA');
});
*/
/* LIKE THIS
//except the whole promise sits inside app.get
app.get("/", function(req, res) {
  res.send("Ubq miner payouts! " + ubqPayouts + " hell yeah");
});
*/

//Stays as is, doesn't weave into app. get..
const createPriceResponse = (lastprice, res) => {
  var response = {
    lastBitcoinPrice: lastprice
  };
};

//Using USDT tether as proxy price for $USD.
//https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC
//refashioned from resolve object lastprice: etc.. to a var lastprice.
app.get('/', (req, res) => {
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
          /*resolve({
             lastprice: body.result.Last
            //bidPrice: body.result.Bid,
            //askPrice: body.result.Ask
          });
          */
          resolve(
            lastprice = body.result.Last
          );
        }
      });
    });
  };
  
      // console.log(JSON.stringify(result));
          //CREATE RESPONSE FOR A VAR HERE FOR ENDPOINT DISPLAY?
          //Passing in a variable lastprice = or key lastprice: is the same :)
      bitcoin('USDT-BTC').then((lastprice) => {
    console.log(JSON.stringify(lastprice));
    createPriceResponse(lastprice, res);
  }, (errorMessage) => { 
    console.log(errorMessage);
  });
}); //app.get end  


  app.listen(port, () => {
    console.log('We are live on ' + port);
  });


/* Original promise
//Using USDT tether as proxy price for $USD.
//https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC
//refashioned from resolve object lastprice: etc.. to a var lastprice.
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
          resolve({
            lastprice: body.result.Last
            bidPrice: body.result.Bid,
            askPrice: body.result.Ask
          });
          //resolve(
            //lastprice = body.result.Last
          //);
        }
      });
    });
  };
  
      // console.log(JSON.stringify(result));
      bitcoin('USDT-BTC').then((lastprice) => {
    console.log(JSON.stringify(lastprice));
  }, (errorMessage) => { 
    console.log(errorMessage);
  });
*/
  
