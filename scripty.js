let submit = document.querySelector('button');
let info = document.querySelector('.info');
let input = document.querySelector('.inputs');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let urls = 'https://ipapi.co/json';
    if (!input.value) {
        info.innerHTML = `Please enter your name before you submit.`;
        info.style.color = "red";
        return;
    } else


        info.style.color = "black";
    fetch(urls).then((response) => response.json()).then((data) => {
        info.innerHTML = `
            Hey ${input.value}&nbsp; ! Good Day,  Below is the Data. <br>
            <br>
             City: &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; ${data.city}  <br>
            State: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; ${data.region}  <br>
            IP Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${data.ip}  <br>
            Country Code: &nbsp;${data.postal}<br>
            Country: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${data.country_name}<br>

            `;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            exit;
        }

        function success(position) {
            let { latitude, longitude } = position.coords;
            console.log(latitude, longitude);
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0a1f4c7a28a83efd43e3ed98c4734f4d`;
            console.log(url);

            fetch(url).then((response) => response.json()).then((data) => {

                console.log((data.main.temp - 273.15).toFixed(2));
                console.log(data.weather[0].description)

                let tempo = document.querySelector('.tempo');
                tempo.innerHTML =
                    `
                Temperature: &nbsp;&nbsp;&nbsp;&nbsp;${(data.main.temp - 273.15).toFixed(2)} &deg;C<br>
                Description: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${data.weather[0].description} <br>
                Humidity: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${data.main.humidity}
                <br><br>
                That is all, We got. Stay tuned for more !


                `;

            })

        }

        function error(message) {
            console.log('Unable to load location')
        }






    })








});