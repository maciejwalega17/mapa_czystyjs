

const shareBtn = document.querySelector('.share');
const closeBtn = document.querySelector('.close');
const copyBtn = document.querySelector('.copy');
const input = document.querySelector('.link-input');
const popUp = document.querySelector('.shadow');

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

//rest

const createLink = () => {
	const cordLinkStart = `https://www.google.com/maps/search/?api=1&query=`;
	const cordLinkEnd = latitude + ',' + longitude;
	const finalLink = cordLinkStart + cordLinkEnd;
	input.value = finalLink;
};

const showPopUp = () => {
	popUp.style.display = 'flex';
};

const closePopUp = () => {
	popUp.style.display = 'none';
};

const handleClick = () => {
	createLink();
	showPopUp();
};

const copyToClipboard = () => {
	input.select();
	input.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(input.value);
};

handleLoadMap();
shareBtn.addEventListener('click', handleClick);
copyBtn.addEventListener('click', copyToClipboard);
closeBtn.addEventListener('click', closePopUp);
