import express from "express";
import { getAllContact, getContactById, createNewContact, updateOldContact, deleteOldContact } from "../controllers/contactController.js";
import jwtTokenValidater from "../middlewares/tokenValidateHandler.js";

const contactRouter = express.Router()

contactRouter.use(jwtTokenValidater)

contactRouter.get("/", getAllContact)
contactRouter.get("/:id", getContactById)
contactRouter.post("/", createNewContact)
contactRouter.put("/:id", updateOldContact)
contactRouter.delete("/:id", deleteOldContact)

export default contactRouter
