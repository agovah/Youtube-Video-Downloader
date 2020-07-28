const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.listen(4000, () => {
    console.log("Server listening on port 4000!");
});

app.get("/download", (req, res) => {
    var URL = req.query.URL;
    var stream = ytdl(URL);

    stream.on("info", (info) => {
        console.log(info.title);
        console.log(info.video_id);
        res.header("Content-Disposition", `attachment; filename=${info.title}.mp4`);
        ytdl(URL, {
            format: "mp4",
        }).pipe(res);
    });
});
