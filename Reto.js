// 1. Conectarse al enlace 
const request = require("request")
const url = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow"

request({url, json: true, gzip: true},(error,response) =>{
//2. Obtener el número de respuestas contestadas y no contestadas
    var answered = 0
    var notAnswered = 0
    response.body.items.forEach(item => {
        if (item.is_answered) answered++
        else notAnswered++     
    })
    console.log("2. Obtener el numero de respuestas contestadas y no contestadas")
    console.log("Respuestas contestadas: " + answered)
    console.log( "Respuestas NO contestadas: " + notAnswered)
//3. Obtener la respuesta con menor número de vistas
//4. Obtener la respuesta más vieja y más actual
//5. Obtener la respuesta del owner que tenga una mayor reputación
//6. Imprimir en consola del punto 2 al 5


})