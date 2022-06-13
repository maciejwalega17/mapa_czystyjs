// Location sharing with Pure JavaScript and Maps Service

// A simple app where you can share location with your friend. In this project, you will use JavaScript to interact with external services for maps (ex. Google Maps or OpenStreetMap).

// Requirements:
// displaying your current location on a map
// "Share" button which creates a link with your current location
// a page which displays a location embedded in URL
// Nice to haves:
// sharing your realtime location, you will have to save it and read it every few seconds from an external database (ex. Firebase)
// displaying the realtime location of your friend when he accesses the page

const shareBtn = document.querySelector('.share');

const KEY = 'AIzaSyCe1ODd-Y87NWxGnrr_dMXat0N1mk9RYis';

let latitude;
let longitude;

//stuff needed for navigator to work
const errorHandler = (err) => {
	if (err.code !== 0) {
		console.log('Problem occured while trying to use your browser geolocation');
	}
};

const showLocation = (data) => {
	latitude = data.coords.latitude;
	longitude = data.coords.longitude;
	console.log(latitude);
	console.log(longitude);
};

const options = { timeout: 30000, enableHighAccuracy: true };
const getLocation = () => {
	navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
};

//stuff from google maps api
const handleLoadMap = () => {
	getLocation();
	let script = document.createElement('script');
	script.src = `https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=initMap`;
	script.async = true;

	window.initMap = function () {
		let map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: latitude, lng: longitude },
			zoom: 14,
		});
		let marker = new google.maps.Marker({
			position: { lat: latitude, lng: longitude },
			map: map,
		});
	};

	document.head.appendChild(script);
};
handleLoadMap()
shareBtn.addEventListener('click', handleLoadMap);
