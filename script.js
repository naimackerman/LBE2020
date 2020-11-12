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