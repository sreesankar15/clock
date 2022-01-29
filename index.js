// jshint esversion:6
var currentdate = new Date();

$(document).ready(function () {
    setTimeout(function () {
        $("body").css("opacity", "1");
    }, 1000);

});

setInterval(function () {
    currentdate = new Date();
    let hour = "<span class=\"hour\">" + currentdate.getHours() + "</span>";
    let minute = "<span class=\"minute\">" + currentdate.getMinutes() + "</span>";
    let second = "<span class=\"second\">" + currentdate.getSeconds() + "</span>";

    if (currentdate.getHours().length < 2) {
        hour = "<span class=\"hour\">" + "0" + currentdate.getHours() + "</span>";
    }
    if (currentdate.getMinutes().toString().length < 2) {
        minute = "<span class=\"hour\">" + "0" + currentdate.getMinutes() + "</span>";
    }
    if (currentdate.getSeconds().toString().length < 2) {
        second = "<span class=\"hour\">" + "0" + currentdate.getSeconds() + "</span>";
    }

    let time = hour + ":" + minute + ":" + second;

    $(".card-subtitle").html(time);
}, 1000);