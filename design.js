let info = document.querySelector('.info');


let test = document.querySelector('button');
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    exit;
}

function success(position) {
    let { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
}

function error(message) {
    console.log('Unable to load location')
}

test.addEventListener('click', function() {

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

        fetch(url).then((response) => response.json()).then((data) => console.log(data))

    }

    function error(message) {
        console.log('Unable to load location')
    }




})