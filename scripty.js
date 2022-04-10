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
            let url = `http://api.weatherstack.com/current?access_key=93591bc5d2682df4e653c9be35b3b1ae&query=${latitude},${longitude}`;
            console.log(url);

            fetch(url).then((response) => response.json()).then((data) => {

                console.log(data);


            })

        }

        function error(message) {
            console.log('Unable to load location')
        }






    })








});