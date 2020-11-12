function visitorFunction() {
    var txt;
    var person = prompt("Please enter your name:", "My name");
    if (person == null || person == "") {
        txt = "Visitor don't want to be known.";
    }
    else {
        txt = "Hello " + person + "! Thank you for getting acquainted with me, Have a good day.";
    }
    document.getElementById("yourname").innerHTML = txt;
}

myButton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}