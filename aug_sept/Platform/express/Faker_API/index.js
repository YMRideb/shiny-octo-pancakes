const express = require("express");
app = express();
port = 8000;
const {faker} = require("@faker-js/faker");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

class User {
  constructor() {
    this._id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNum = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

const makeNewUser = () => {
  return (newUser = new User());
};

const users = [];

class Company {
  constructor() {
    this._id = faker.random.number();
    this.name = faker.company.companyName();
    this.address = {
        street: faker.random.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
  }
}

const makeNewCompany= ()=>{
    return newCompany = new Company();
}

const companies = []


app.post('/api/user/new', (req, res)=>{
    const user = makeNewUser();
    users.push(user);
    res.json({user});
})

app.post('/api/companies/new', (req, res)=> {
    const company = makeNewCompany();
    companies.push(company);
    res.json({company});
})

app.post('/api/user/company', (res, req)=>{
    const newUser = makeNewUser();
    const newCompany = makeNewCompany();
    users.push(newUser);
    companies.push(newCompany);
    res.json({user: newUser, company: newCompany});
})

app.get('/api', (req, res)=>{
  res.json({
    count: users.length,
    count: companies.length,
    results: [users, companies]
  })
})

app.get('/api/companies', (req, res)=>{
    res.json({results:companies});
})

app.get('/api/users', (req, res)=>{
    res.json({results:users});
})

server = app.listen(port, ()=>console.log((`Listening on port ${port}`)));