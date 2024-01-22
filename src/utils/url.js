const request=require('request')

const url=(address,callback)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?q='+address+'&appid=6b6ada2b2d0c1c79a5eb83bc094eea5d&units=metric&limit=1'

    request({url,json:true},(error,{body})=>{
             if(error)
             {
               callback('your net is off.Please turn on internet.')
             }
             else if(body.message)
             {
                callback("unable find location")
             }
             else{
                 callback(undefined,{
                    //latitude:body.coord.lon,
                   // longitute:body.coord.lat,
                   // location:body.name,
                    body:body
                 })
             }
            
            
         })

}


url('pune',(error,data)=>{
    if(error)
    { 
        console.log('Error',error)
    }
    
    console.log(data)
})
module.exports=url

// const url='https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=6b6ada2b2d0c1c79a5eb83bc094eea5d&units=metric&limit=1'
// request({url:url,json:true},(error,response)=>{
//     if(error)
//     {
//         console.log('your net is off.Please turn on internet.')
//     }else{
//         console.log(response.body)
//         console.log(response.body.weather[0].description+'.It is currently'+response.body.main.temp +'degree out. It feels like'+response.body.main.feels_like  +'degree oyrt')
//         console.log('longititute:'+response.body.coord.lon+' latitude:'+response.body.coord.lat)
//     }
    
    
// })