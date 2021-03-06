var request = require('request');

module.exports = {

  fetchForBot: function(res, req) {

    var fetchBots = ['https://robot85.herokuapp.com/', 'https://robot86.herokuapp.com/', 'https://robot87.herokuapp.com/']
    var bot = fetchBots[Math.floor((Math.random() * fetchBots.length))]

    var options = {
      url: bot + req.path,
      timeout: 10000
    }
    request.get(options, function(error, response, body) {
      if (body) {
        body = body.replace('isBot=false', 'isBot=true')
      }

      res.send(200, body)
    });
  }

}
