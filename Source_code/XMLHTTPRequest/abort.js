const XML = new XMLHttpRequest();
XML.open("GET", "https://swapi.info/api/people/1", true);

XML.send();

XML.abort();
console.log("Request aborted");