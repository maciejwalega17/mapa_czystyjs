const shareBtn = document.querySelector('.share');
const closeBtn = document.querySelector('.close');
const copyBtn = document.querySelector('.copy');

const input = document.querySelector('.link-input');
const popUp = document.querySelector('.shadow');
const check = document.querySelector('.check');

const KEY = 'AIzaSyCe1ODd-Y87NWxGnrr_dMXat0N1mk9RYis';



//stuff needed for navigator to work
const errorHandler = (err) => {
	if (err.code !== 0) {
		console.log('Problem occured while trying to use your browser geolocation');
	}
};

const showLocation = (data) => {
	const latitude = data.coords.latitude;
	const longitude = data.coords.longitude;
	console.log(latitude);
	console.log(longitude);
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

const options = { timeout: 30000, enableHighAccuracy: true };
const getLocation = () => {
	navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
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
	check.style.display = 'none';
};

const closePopUp = () => {
	popUp.style.display = 'none';
	check.style.display = 'none';
};

const handleClick = () => {
	createLink();
	showPopUp();
};

const copyToClipboard = () => {
	input.select();
	input.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(input.value);
	check.style.display = 'inline';
};

getLocation();
shareBtn.addEventListener('click', handleClick);
copyBtn.addEventListener('click', copyToClipboard);
closeBtn.addEventListener('click', closePopUp);
