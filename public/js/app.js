

console.log('client side message loaded')

fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})

  

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message1')
const messageTwo=document.querySelector('#message2')
const messagethree=document.querySelector("#message3")




weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value

    messageOne.textContent="Loading...";
    messageTwo.textContent="";
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                messageOne.textContent=data.error
            }
            else{
                messagethree.textContent="Country name:"+data.country
                messageOne.textContent="City name:"+data.location
                messageTwo.textContent="Temprature:"+data.temperature
                
            }
        })
    })

    console.log(location)
})
