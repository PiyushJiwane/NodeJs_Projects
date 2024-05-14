import express from "express";
import {getAllContact,getContactById,createNewContact, updateOldContact, deleteOldContact} from "../controllers/contactController.js";

const contactRouter=express.Router()

contactRouter.get("/",getAllContact)
contactRouter.get("/:id",getContactById)
contactRouter.post("/",createNewContact)
contactRouter.put("/:id",updateOldContact)
contactRouter.delete("/:id",deleteOldContact)

export default contactRouter
