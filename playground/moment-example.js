var moment = require('moment');

console.log(moment().format());


// unix epic time, January 1st 1970 @ 12:00am -> 0
// unix epic time, January 1st 1970 @ 12:01am -> 60

var now = moment();
console.log('Current timesatmp', now.unix());

var timesatmp = 1502867111;
var currentMoment = moment.unix(timesatmp);
console.log('currentMoment:', currentMoment.format('MMM D, YY @ h:mm a'));