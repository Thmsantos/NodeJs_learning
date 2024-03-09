const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

let codigo = Math.floor(Math.random() * 10000 + 99999)

client.messages
    .create({
        body: codigo,
        from: process.env.TWILIO_NUMBER,
        to: '########'
    })

console.log(codigo) 

#TGD0gYQ1xh0KPhCFF7yQo7eeaz9U7iAHovNM81qM
