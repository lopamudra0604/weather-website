const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.positionstack.com/v1/forward?access_key=4b80f6d308f7050039432d207fa25f7d&limit=1&query='+encodeURIComponent(address)

    request({url, json: true}, (error, {body})=> {
        if(error) {
            callback('Unable to connect to location service!', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            });
        }
    })
}

module.exports = geocode