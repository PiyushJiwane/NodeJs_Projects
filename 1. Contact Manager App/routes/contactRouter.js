import express from "express";
import {getAllContact,getContactById,createNewContact} from "../controllers/contactController.js";

const contactRouter=express.Router()

contactRouter.get("/",getAllContact)
contactRouter.get("/:id",getContactById)
contactRouter.post("/",createNewContact)

export default contactRouter
