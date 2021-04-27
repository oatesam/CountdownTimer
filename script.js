// Initialize Launch Date
var date = new Date('May 1, 2021 21:30:00');
// var daysToLaunch = 18;
// date.setDate(date.getDate() + daysToLaunch);
var m = date.toDateString();
var time = date.toLocaleTimeString();
document.getElementById('time').innerHTML = m + ' ' + time;

// Handle single-digits gracefully
function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

// Update countdown every second
setInterval(function updateTime(){
	var launchDate = date,
	currentDate = new Date(),
	difference = Math.abs(launchDate - currentDate) / 1000,
	days = Math.floor(difference / 86400),
	hours = Math.floor(difference / 3600) % 24,
	mins = Math.floor(difference / 60) % 60,
	seconds =  difference % 60,
	counters = document.querySelectorAll('.counter');

	for(var i = 0; i < counters.length; i++){

		switch (counters[i].getAttribute('data-counttype')) {
			case 'days':
				counters[i].innerHTML = padLeadingZeros(days, 2);
			break;
			case 'hours':
				counters[i].innerHTML = padLeadingZeros(hours, 2);
			break;
			case 'minutes':
				counters[i].innerHTML = padLeadingZeros(Math.round(mins), 2);
			break;
			case 'seconds':
				counters[i].innerHTML = padLeadingZeros(Math.round(seconds), 2);
			break;
			default:

			break;
		}
	}
}, 1000);
