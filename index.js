const express = require("express");
const app = express();
const port = 6000;

let data = {
    data_response: "print('excuted code')",
};
app.use("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(express.json());
app.get("/api", (req, res) => {
    res.send(JSON.stringify(data));
});
app.post("/api", (req, res) => {
    data = req.body;
    data.data_response = data.message;
    res.send(JSON.stringify("Data received"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
