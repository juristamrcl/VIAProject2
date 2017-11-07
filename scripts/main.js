var slideIndex = 1;

function currentSlide(n, dot) {
    showSlides(slideIndex = n, dotName = dot);
}

function showSlides(n, dotName) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName(dotName);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

function startCountDown(){

// Set the date we're counting down to
    var countDownDate = new Date("Nov 7, 2017 15:42:00").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Our web Page is ready! Please, step IN.";
            document.getElementById("getInModalButton").style.display = "inline-block";
        }
    }, 1000);
}

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(49.820923, 18.262524),

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(49.820923, 18.262524),
        map: map,
        title: 'Map'
    });
}

function submitMessage(){
    var toSend = true;

    var mail = document.getElementById("contactMail");
    var name = document.getElementById("contactName");
    var subject = document.getElementById("contactSubject");
    var textArea = document.getElementById("contactTextArea");
    var submitMessageButton = document.getElementById("contactSendMessageButton");
    var leaveMessage = document.getElementById("leaveMessage");

    var anotherMessageButton = document.getElementById("sendMessageAgainButton");

    if (name.value.replace(/\s/g , "") == ""){
        name.style.backgroundColor = "#FE4042";
        name.style.color = "#FFF";
        toSend = false;
    }
    else{
        name.style.backgroundColor = "#F8FAFD";
        name.style.color = "#506A85";
    }

    if (subject.value.replace(/\s/g , "") == ""){
        subject.style.backgroundColor = "#FE4042";
        subject.style.color = "#FFF";
        toSend = false;
    }
    else{
        subject.style.backgroundColor = "#F8FAFD";
        subject.style.color = "#506A85";
    }

    if (textArea.value.replace(/\s/g , "") == ""){
        textArea.style.backgroundColor = "#FE4042";
        textArea.style.color = "#FFF";
        toSend = false;
    }
    else{
        textArea.style.backgroundColor = "#F8FAFD";
        textArea.style.color = "#506A85";
    }

    if (validateEmail(mail.value)){
        mail.style.backgroundColor = "#F8FAFD";
        mail.style.color = "#506A85";
    }
    else{
        mail.style.backgroundColor = "#FE4042";
        mail.style.color = "#FFF";
        toSend = false;
    }

    if (toSend){
        leaveMessage.innerHTML = "Your message was sent successfully!";
        anotherMessageButton.style.display = "inline-block";
        mail.style.display = name.style.display = subject.style.display = textArea.style.display = submitMessageButton.style.display = "none";
    }
}

function testMail(){
    var mail = document.getElementById("newsletterInput");
    if (validateEmail(mail.value)){
        mail.style.backgroundColor = "#F8FAFD";
        mail.style.color = "#506A85";
        alert("Congratulations! You have been successfully subscribed to the newsletter.")
    }
    else{
        mail.style.backgroundColor = "#FE4042";
        mail.style.color = "#FFF";
    }
}

function validateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    return (false)
}

function sendAnotherMessage(){

    var mail = document.getElementById("contactMail");
    var name = document.getElementById("contactName");
    var subject = document.getElementById("contactSubject");
    var textArea = document.getElementById("contactTextArea");
    var submitMessageButton = document.getElementById("contactSendMessageButton");

    var anotherMessageButton = document.getElementById("sendMessageAgainButton");

    anotherMessageButton.style.display = "none";
    leaveMessage.innerHTML = "Leave a messsage";
    mail.style.display = name.style.display = subject.style.display = textArea.style.display = submitMessageButton.style.display = "inline-block";
    mail.value = name.value = subject.value = textArea.value = submitMessageButton.value = "";
}

function hideCarousel(){
    if (document.getElementById("blog-slideshow-container").style.display == "none"){
        document.getElementById("blog-slideshow-container").style.display = "flex";
        document.getElementById("blogDots").style.display = "inline-block";
        document.getElementsByClassName("arrowUpImg")[0].style.display = "inline-block";
        document.getElementsByClassName("arrowUpImg")[1].style.display = "none";
    }else{
        document.getElementById("blog-slideshow-container").style.display = "none";
        document.getElementById("blogDots").style.display = "none";
        document.getElementsByClassName("arrowUpImg")[0].style.display = "none";
        document.getElementsByClassName("arrowUpImg")[1].style.display = "inline-block";
    }
}