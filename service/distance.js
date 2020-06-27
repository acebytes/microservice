const got = require('got')

const apiKey = process.env.ZIPCODE_API_KEY

const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

const distance = {
    find: function(req, res) {
        (async () => {
            try {
                const response =  await got(zipCodeURL + apiKey
                    + '/distance.json/' + req.params.zipcode1 + '/'
                    + req.params.zipcode2 + '/mile');
                // console.log('statusCode:', response.statusCode);
                console.log('body:', response.body);
                res.send( JSON.parse(response.body))
            } catch (error) {
                console.log('error:', error);
            }
        })();
    }
};

module.exports = distance;