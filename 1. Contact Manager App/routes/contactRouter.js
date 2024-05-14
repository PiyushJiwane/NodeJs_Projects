import express from "express";
import {getAllContact,getContactById,createNewContact, updateOldContact} from "../controllers/contactController.js";

const contactRouter=express.Router()

contactRouter.get("/",getAllContact)
contactRouter.get("/:id",getContactById)
contactRouter.post("/",createNewContact)
contactRouter.put("/:id",updateOldContact)

export default contactRouter
