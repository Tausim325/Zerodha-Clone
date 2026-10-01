const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { OrdersModel } = require("./model/OrdersModel");
const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");

const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://zerodha-clone-frontend.onrender.com",
      "https://zerodha-dashboard-u2j5.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", authRoute);


app.get("/allHoldings", async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
res.json(allHoldings);
});

app.get("/allPositions", async(req,res)=>{
  let allPositions = await PositionsModel.find({});
res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});


app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB connected!");
});
