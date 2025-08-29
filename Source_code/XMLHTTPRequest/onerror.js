const XML = new XMLHttpRequest();
XML.open("GET", "https://swapi.info/api/people/1", true);

XML.error = function() {
    console.log("Request error");
}

XML.send();
