$("#close-sidebar").click(function () {
    $(".sidebar").animate({ width: "0" }, 1000)
    $(".sidebar-open").animate({ marginLeft: "0" }, 1000)
})
$(".sidebar-open").click(function () {
    $(".sidebar").animate({ width: "250px" }, 1000);
    $(".sidebar-open").animate({ marginLeft: "250px" }, 1000)
})
$("section h2").click(function (eInfo) {
    $(".singer-detiels").not($(eInfo.target).next()).slideUp(500)
    $(eInfo.target).next().slideToggle(500)
})


var eventDate = new Date("7/1/2024")

function event(){
    var curentDate = new Date();
    difference = eventDate - curentDate;
    
    var second = 1000;
    var min = second * 60;
    var hour = min * 60;
    var day = hour * 24;

    var d =Math.floor(difference / (day));
    var h = Math.floor((difference % (day)) / (hour));
    var m = Math.floor((difference % (hour)) / (min));
    var s =Math.floor((difference % (min)) / (second));

    $(".days h3").html(d + " d") ;
    $(".hours h3").html(h + " h");
    $(".min h3").html(m + " m");
    $(".secound h3").html(s + " s");
}
setInterval(function () {
    event()
}, 1000)


let message = document.querySelector(".message");
let count = 100;
// console.log(count);

message.addEventListener("input" , function(){
   document.querySelector(".count").innerHTML =  count - message.value.length
   if(message.value.length > count){
    document.querySelector(".count").innerHTML= "your available character finished"
   }
})
console.log(message.length);


// $(".message").input(function(){
//     let message = count - $(".message").val.length;
//     $(".count").html(message);
// })