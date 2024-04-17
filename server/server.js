import express, { json } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(json());
app.use(cors());
const port = 3030;