const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const path = require("path");
const app = express();


mongoose.set('strictQuery', false);

var routes = require('./route/route');
const cors = require('cors');





app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cors());

// app.use(express.static('server'));
app.use(express.json());
app.use('/blood-bank-signup',routes);

// const staticPath = path.join(__dirname,"../src");

// app.set("view engine","hbs");

// app.use(express.json());

// app.get("/",(req,res)=>{
    //     const BloodBank2= req.body.State;
    //     console.log(BloodBank2);
    // })
    
// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello from JWoC .......');
  });

    // app.get("/", (req, res) => {
        //     res.send(path.join(__dirname,"../src/Component/SignIn_Up/SignIn.js"));
        // });
        
        
        
        
        // const BloodBankSchema= new mongoose.Schema({
            //     Blood_Bank_Name: String,
//     State: String,
//     District: String,
//     City: String,
//     Address: String,
//     Pincode: Number,
//     Contact_No: String,
//     Mobile: Number,
//     Helpline: Number,
//     Fax: String,
//     Email: String,
//     Nodal_Officer: String,
//     Contact_Nodal_Officer: String,
//     Mobile_Nodal_Officer: Number,
//     Email_Nodal_Officer: String,
//     Category: String,
//     Blood_Component_Available: String,
//     Apheresis: String,
//     Service_Time: String,
//     License_No: String,
//     Date_License_Obtained: String,
//     Date_of_Renewal: Date,
//     Latitude: String,
//     Longitude: String,
// });

// const BloodBank = new mongoose.model("Blood Bank",BloodBankSchema);

mongoose.connect("mongodb://0.0.0.0:27017/BloodDonation",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected to mongoDb successfully");
}).catch((err)=>{
    console.log(err);
});


// Create Data
app.post("http://localhost:8000/blood-bank-signup", async (req,res) => {
    const bloodbank = await BloodBank.create(req.body);

    res.status(200).json({
        success:true,
        bloodbank,
    });
});

//Read Data
app.get("http://localhost:8000/blood-bank-signup", async (req,res) => {

    const bloodbanks = await BloodBank.find();

    res.status(200).json({
        success:true,
        bloodbanks,
    });
});

// //Update Data
// app.put("/api/v1/bloodbank/:id", async (req, res) => {
//     let bloodbank = await BloodBank.findById(req.params.id);

//     if (!bloodbank) {
//         return res.status(500).json({
//             success: false,
//             message: "Data not found",
//         });
//     }

//     bloodbank = await BloodBank.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,  // set 'new' to true to return the updated object
//         useFindAndModify: false,
//         runValidators: true,
//     });

//     res.status(200).json({
//         success: true,
//         bloodbank,
//     });
// });


//update data using patch (Only Pincode Change)

app.patch("/api/v1/bloodbank/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const bloodbank= await BloodBank.findByIdAndUpdate(_id, req.body,{
            new:true
            });
        res.send(bloodbank);
    }catch(err){
        res.status(400).send(err);
    }
})


// //Delete Data
// app.delete("/api/v1/bloodbank/:id",async (req,res) => {

//     const bloodbank = await BloodBank.findById(req.params.id);

//     if(!bloodbank){
//         return res.status(500).json({
//             success:false,
//             message:"Data not found",
//         });
//     }

//     await bloodbank.remove();

//     res.status(200).json({
//         success:true,
//         message:"Data is deleted successfully"
//     });
// });


app.listen(8000, () => {
    console.log(`listening to the http://localhost:8000`);    
});


// const adder = async ()=>{

//     const BB = new BloodBank({
//         Blood_Bank:"BLOOD CENTRE CHADOORASub District Hospital",
//         Type:"Govt."
//     })
    
//     await BB.save();
// }

// const adder = async ()=>{
    
//     const BB = await BloodBank.create({
//         Blood_Bank:"BLOOD CENTRE CHADOORASub District Hospital",
//         Type:"Govt."
//     })
// }

// const adder = async ()=>{
    
//     const BB = await BloodBank.find({Type:{$eq:"Govt."}});

//     console.log(BB);
// }

// adder();