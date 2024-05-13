import express from "express";
import {getAllContact,getContactById} from "../controllers/contactController.js";

const contactRouter=express.Router()

contactRouter.get("/",getAllContact)
contactRouter.get("/:id",getContactById)

export default contactRouter
