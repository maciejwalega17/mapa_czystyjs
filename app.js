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

const KEY = 'AIzaSyCe1ODd - Y87NWxGnrr_dMXat0N1mk9RYis';

const errorHandler = (err) => {
	if (err.code !== 0) {
		console.log('problem');
	}
};

const showLocation = (data) => {
	console.log(data);
};

const options = { timeout: 30000 };
const getLocation = () => {
	navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
};

const handleClick = () => {
	console.log('test');
};

shareBtn.addEventListener('click', getLocation);
