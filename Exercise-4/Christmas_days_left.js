// today day
var date1 = new Date();
//christmas day
var date2 = new Date(2016,11,25);
//milliseconds in a day
var one_day=1000*60*60*24;
var Ch = ((date2 - date1)/one_day);
// days left for christmas
console.log(Ch + " Days left");
