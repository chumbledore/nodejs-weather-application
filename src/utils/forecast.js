const log = console.log
const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f11eacf82564bd4e251845d560abac33&query=${lat},${lon}&units=f`

    request({ url, json: true}, (error, {body}) => {

        if(error) {
            callback('Unable to connect to weather services')
        } else if (body.error) {
            callback('Coordinates could not be found. Try again.')
        } else {
            callback(undefined, body.current.observation_time + ' ' + body.current.weather_descriptions[0] + '. It is ' + body.current.temperature + ' out. It feels like ' + body.current.feelslike + ' out.' + 'The humidity is ' + body.current.humidity + "%.")
        }
    })

}





  module.exports = forecast