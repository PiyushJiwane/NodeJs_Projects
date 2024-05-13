import express from "express";
import getAllContact from "../controllers/contactController.js";

const contactRouter=express.Router()

contactRouter.get("/",getAllContact)

export default contactRouter
