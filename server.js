const express = require("express");
const {faker} = require('@faker-js/faker');
const app = express();
const port = 8000;

const creatUser = () =>{
    const User = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        _id : faker.datatype.uuid()
    };
    return User;
}

const createCompany = () =>{
    const Company = {
        _id : faker.datatype.number(),
        name : faker.company.name(),
        address : {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return Company;
}

app.get("/api", (req, res) => {
    return res.json({ message: "Hello World" });
});

app.post("/api/users/new", (req, res) => {
    const newUser = creatUser();
    return res.json(newUser);
});

app.post("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    return res.json(newCompany);
});

app.post("/api/user/company", (req, res) => {
    const newUser = creatUser();
    const newCompany = createCompany();
    return res.json({newUser,newCompany});
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );