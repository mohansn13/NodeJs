// function
function getDateTime() {
    // get today's date
    var date = new Date();
    //get hours
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    // get minutes
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    console.log("Time is : ", hour,":", min);
    console.log("Date is : ",date);

}
getDateTime();
