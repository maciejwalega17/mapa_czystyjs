#Test app created for the task:

Location sharing with Pure JavaScript and Maps Service

A simple app where you can share location with your friend. In this project, you will use JavaScript to interact with external services for maps (ex. Google Maps or OpenStreetMap).

Requirements:
displaying your current location on a map
"Share" button which creates a link with your current location
a page which displays a location embedded in URL
Nice to haves:
sharing your realtime location, you will have to save it and read it every few seconds from an external database (ex. Firebase)
displaying the realtime location of your friend when he accesses the page

'Nice to haves' might come when I learn how to use Firebase.

The location might not be precise, it uses navigator.geolocation.getCurrentPosition() method, which has shown to be off a few kms in about half the test cases. 
It seems to work better on phones.
Alternative to it could be using the google maps API for getting the location too, might add that branch in future too.

You can see the app on https://maciejwalega17.github.io/mapa_czystyjs/