function catchRequest() {
    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", "http://localhost:255/qoute", true);

    xhr.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            if (this.status != 200) {
                console.log("Error" + this.status);
            } else {
                document.write(this.responseText);
            }
        }
    };

    xhr.send();
}
catchRequest();