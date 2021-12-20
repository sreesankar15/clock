// jshint esversion:6
var currentdate = new Date();
var datetime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
console.log(datetime);

var superScript = ["<sup>st</sup>", "<sup>nd</sup>", "<sup>rd</sup>", "<sup>th</sup>"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var date = currentdate.getDate();
var dateSuperScript = "";
var month = months[currentdate.getMonth()];
var year = currentdate.getFullYear();

switch (date) {
    case 1:
        dateSuperScript = superScript[0];
        break;
    case 2:
        dateSuperScript = superScript[1];
        break;
    case 3:
        dateSuperScript = superScript[2];
        break;
    default:
        dateSuperScript = superScript[3];
        break;
}

$(".card-title").html(date + dateSuperScript + " " + month + " " + year);

setInterval(function () {
    currentdate = new Date();
    let time = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    $(".card-subtitle").text(time);
}, 1000);