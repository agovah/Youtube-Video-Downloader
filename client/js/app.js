var downloadBtn = document.querySelector(".download-button");
var URLinput = document.querySelector(".URL-input");

function sendURL(url) {
    window.location.href = `http://localhost:4000/download?URL=${url}`;
}

downloadBtn.addEventListener("click", () => {
    var url = URLinput.value;

    if (url != undefined || url != "") {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            console.log(`URL: ${URLinput.value}`);
            sendURL(URLinput.value);
        } else {
            alert("This is not a valid YouTube video URL!");
        }
    }
});
