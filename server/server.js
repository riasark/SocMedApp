const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());