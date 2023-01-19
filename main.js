const inputEl=document.querySelector('#search')
const searchButton=document.querySelector('#search-button')
const temp = document.querySelector('#temp')
const city=document.querySelector('#city-name')
const countryName=document.querySelector('#country')
const statusW=document.querySelector('#status')
const displayArea=document.querySelector('.display-area')
const statusImg=document.querySelector('#status-img')
const error=document.querySelector('#error')

searchButton.addEventListener('click',getWeatherData)

async function getWeatherData(){
    if(inputEl.value=='') {
        return
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&units=imperial&appid=efb0fc86c241e968d94b20af3bf5b161`;
    // console.log(inputEl.value)
    const res = await fetch(url)
    const data = await res.json();
    setWeatherData(data)
    console.log(url)
    inputEl.value=''
    // if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition(setWeatherData)
    // }else{
    //     let body=document.body
    //     let para=document.createElement('p')
    //     para.textContent='geolocation not supports'
    //     body.appendChild(para)
    // }
}

function setWeatherData(data){
    if(data.cod==404) {
        // displayArea.innerHTML=''
        error.textContent='City Not Found'
        // displayArea.innerHTML='<h2>City Not Found.</h2>'
    } else{
        error.innerHTML=''
        statusImg.innerHTML=''
        console.log(data)
        city.textContent=data.name;
        countryName.textContent=data.sys.country;
        temp.textContent=data.main.temp
        statusW.textContent=data.weather[0].main;
        // displayArea.innerHTML='<img src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` />'
        let img = document.createElement('img')
        img.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        statusImg.appendChild(img)
        console.log(img)
    }
}
