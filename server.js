// sk_test_51R3Y0fAsFWbUG6mkGnkJRAnpoVmsnUlTTWvCOvv9xIE0dvLdl7D3AsfkGFw8Wd73f77ZxetgAfoEDBFamiNWwqYn002glyBGb0
// Coffee price_1R3YEbAsFWbUG6mkHvHzYdv8
// Sunglasses price_1R3YKcAsFWbUG6mkxqKlCfAt            
// Camera price_1R3YMyAsFWbUG6mkcB13LoOO

const express = require('express')
var cors = require('cors')
const stripe = require('stripe')('sk_test_51R3Y0fAsFWbUG6mkGnkJRAnpoVmsnUlTTWvCOvv9xIE0dvLdl7D3AsfkGFw8Wd73f77ZxetgAfoEDBFamiNWwqYn002glyBGb0')
const app = express();
app.use(cors()); 
app.use(express.static("public")); 
app.use(express.json());

app.post("/checkout",async(req,res) => {
    console.log(req.body)
    const items = req.body.items
    let LineItems = []
    items.forEach((item)=> { 
        LineItems.push( 
        {price: item.id, 
        quantity: item.quantity }
        )
}); 
    const session =  await stripe.checkout.sessions.create({ 
        line_items: LineItems, 
        mode:"payment", 
        success_url: "http://localhost:3000/success", 
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));

});
app.listen(4000, ()=>console.log("Listening on port 4000!"))
