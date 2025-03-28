import jwt from "jsonwebtoken";


//secert string = 'random st

//payload = security we can transfer  in the payload

//experuy time
//i sagument payload
const token  =jwt.sign({
    userId:'123',
    name : 'rajveer',

    role: 'jaobseeker',
}, "rol-this-is-secret-string", {expiresIn:'1d'});

const decoded = jwt.verify(token, "rol-this-is-secret-string");

console.log(token)

