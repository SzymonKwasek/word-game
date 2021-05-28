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

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const GetData = () => {
    return data[getRandomInt(2)];
}