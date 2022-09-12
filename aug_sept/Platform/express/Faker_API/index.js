const express = require("express");
app = express();
port = 8000;
const {faker} = require("@faker-js/faker");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

class User {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNum = faker.phone.number();
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
    this._id = faker.database.mongodbObjectId();
    this.name = faker.company.name();
    this.address = {
        street: faker.address.street(),
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
    res.json({results: user});
})

app.post('/api/company/new', (req, res)=> {
    const company = makeNewCompany();
    companies.push(company);
    res.json({results: company});
})

// app.post('/api/user/company/:id')
  // const user = new User();
  // const company = new Company();
  // res.json({user, company});
    //   // userNew: users[req.params.id],
    //   // companyNew: companies[req.params.id]

app.get('/api/user/company', (req, res)=>{
    const newUser = makeNewUser();
    users.push(newUser);
    const newCompany = makeNewCompany();
    companies.push(newCompany);
    res.json({
      users, companies
    })
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
    res.json({results:users})
})

server = app.listen(port, ()=>console.log((`Listening on port ${port}`)));