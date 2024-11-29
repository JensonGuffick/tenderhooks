var countDownDate = new Date("NOV 30, 2024 19:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = "The next live starts in " + days + "d " + hours + "h " + minutes + "m " + seconds + "s" + "!";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The live is below!";
        document.getElementById("YoutubePlayer").style.display = "block";
    }
}, 250);