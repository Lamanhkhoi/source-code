const XML = new XMLHttpRequest();
XML.open("GET", "https://swapi.info/api/people/1", true);

XML.onload = function() {
    if (XML.status === 200 ) {
        const data = JSON.parse(XML.responseText);
        console.log("du lieu da duoc truyen :",data);
    } else {
        console.log("Error loading page");
    }
}

XML.send();

console.log("hello everyone !!!");