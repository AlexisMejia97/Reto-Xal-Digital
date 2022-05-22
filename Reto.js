// 1. Conectarse al enlace 
const request = require("request")
const url = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow"

request({url, json: true, gzip: true},(error,response) =>{
//2. Obtener el número de respuestas contestadas y no contestadas

    var answered = 0
    var notanswered = 0
    response.body.items.forEach(item => {
        if (item.is_answered) 
        answered++
        else 
        notanswered++     
    })
    console.log("2. Obtener el numero de respuestas contestadas y no contestadas")
    console.log("Respuestas contestadas: " + answered)
    console.log("Respuestas NO contestadas: " + notanswered)
    console.log(" ")
//3. Obtener la respuesta con menor número de vistas

response.body.items.sort(function(a,b){
    if(a.view_count < b.view_count){
        return -1
    }
    if(a.view_count > b.view_count){
        return 1
    }
    return 0        
})
console.log("3. Obtener la respuesta con menor número de vistas")
console.log("Titulo de la Respuesta con menor numero de vistas: " + response.body.items[0].title)
console.log("Vistas: " + response.body.items[0].view_count)
console.log(" ")
//4. Obtener la respuesta más vieja y más actual
//5. Obtener la respuesta del owner que tenga una mayor reputación
//6. Imprimir en consola del punto 2 al 5


})