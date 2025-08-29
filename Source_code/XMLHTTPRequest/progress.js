const XML = new XMLHttpRequest();
XML.open("GET", "https://swapi.info/api/people/1", true);

XML.progress = function(event) {
    if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`Progress: ${percentComplete.toFixed(2)}%`);
    } else {
        console.log("Progress: Unable to compute");
    }
}

XML.send();