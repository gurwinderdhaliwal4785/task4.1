import{ faker } from "@faker-js/faker";

const ArticleList = [

    {
        "key": 0,
        "avatar": faker.image.urlLoremFlickr({category:'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 5</p>
    },
    {
        "key": 1,
        "avatar": faker.image.urlLoremFlickr({category:'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 4.9</p>
    },
    {
        "key": 2,
        "avatar": faker.image.urlLoremFlickr({category:'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 5</p>
    },


]

export default ArticleList