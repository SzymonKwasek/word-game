const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.options('*', cors());

const data = [
    {
        Question: "select animals",
        AllWords: [
            "hole",
            "sofa",
            "pear",
            "tiger",
            "oatmeal",
            "square",
            "nut",
            "cub",
            "shirt",
            "tub",
            "passernger",
            "cow"
        ],
        GoodWords: [
            "tiger",
            "cow"
        ]
    },
    {
        Question: "select colors",
        AllWords: [
            "jeans",
            "existence",
            "ink",
            "red",
            "blue",
            "yellow",
            "laugh",
            "behavior",
            "expansion",
            "white",
            "black",
            "cakes"
        ],
        GoodWords: [
            "red",
            "blue",
            "yellow",
            "white",
            "black"
        ]
    },
    {
        Question: "select vehicles",
        AllWords: [
            "belief",
            "wire",
            "car",
            "bus",
            "star",
            "river",
            "hat",
            "skirt",
            "train",
        ],
        GoodWords: [
            "car",
            "train",
            "bus"
        ]
    },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get('/get-questions', (req, res) => {
    const dataToSend = data[getRandomInt(2)];
    res.send(dataToSend);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});