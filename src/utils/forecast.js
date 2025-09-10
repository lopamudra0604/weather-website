const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=97e896df72195acd8388093c9b9a7b72&units=f&query=' +latitude +','+ longitude
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather API!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ 'It is currently '+ body.current.temperature + ' degrees out. It feels like '+ body.current.feelslike+ ' degrees out.')
        }
    })
}

module.exports = forecast;