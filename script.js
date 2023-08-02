        const apikey="f349017823b2dcc53dba584a69f214dd";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");


        
        async function checkWeather(city) {
            const response = await fetch(apiurl+city+`&appid=${apikey}`);
            var data=await response.json();
            console.log(data);
            //it will update details on app..
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";





            
        }
       searchbtn.addEventListener("click",()=>{
        checkWeather(searchbox.value);

       })

       const timel=document.getElementById("time");
       const datel=document.getElementById("date");
       const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
       const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
       setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timel.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    datel.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);
       
