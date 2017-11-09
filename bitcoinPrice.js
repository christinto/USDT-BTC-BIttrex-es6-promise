// write with express and and bootstrapped front end 
//haylo
const request = require('request');

//Using USDT tether as proxy price for $USD.
//https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC
    return new Promise((resolve, reject) => {
      var myCoin = encodeURIComponent(ticker);
  
      request({
        url: `https://bittrex.com/api/v1.1/public/getticker?market=${myCoin}`,
        json: true
      }, (error, response, body) => {
        if (error) {
          reject('Unable to connect to Ubiq miner servers.');
        } else if (body.result.Last != '') {
          resolve({
            
            lastprice: body.result.Last,
            bidPrice: body.result.Bid,
            askPrice: body.result.Ask
          });
        }
      });
    });
  };
  
      // console.log(JSON.stringify(result));
      monero('USDT-BTC').then((lastprice) => {
    console.log(JSON.stringify(lastprice));
  }, (errorMessage) => { 
    console.log(errorMessage);
  });
  
