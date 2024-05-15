import expressAsyncHandler from "express-async-handler"
import { deleteData, getData, getDataById, setData, updateData } from "../db/temp_db.js"
import conatctModel from "../models/conatctModel.js"

const getAllContact = expressAsyncHandler(async (req, res) => {
    res.status(200).json({
        "data": await conatctModel.find({ user_id: req.user._id })
    })
})

const getContactById = expressAsyncHandler(async (req, res) => {
    const contactId = req.params.id

    const contactDetailsById = await conatctModel.findById(contactId)

    if (!contactDetailsById) {
        res.status(404)
        throw new Error("Conatct Id not found")
    }

    res.status(200).json({
        "data": contactDetailsById
    })
})

const createNewContact = expressAsyncHandler(async (req, res) => {
    console.log(`---->${req.user._id}`);
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are manditory")
    }

    const newContact = new conatctModel({
        user_id: req.user._id,
        name, email, phone
    })

    await newContact.save()

    res.status(201).json({
        "data": "data got saved successfully !!!"
    })
})

const updateOldContact = expressAsyncHandler(async (req, res) => {
    const contactId = req.params.id

    const contactDetailsById = await conatctModel.findById(contactId)

    if (!contactDetailsById || contactDetailsById.user_id.toString() !== req.user._id) {
        res.status(404)
        throw new Error("Conatct Id not found")
    }

    await conatctModel.findByIdAndUpdate(contactId, req.body, { new: true })
    res.status(201).json({
        "data": "data got updated successfully !!!"
    })
})

const deleteOldContact = expressAsyncHandler(async (req, res) => {
    const contactId = req.params.id

    const contactDetailsById = await conatctModel.findById(contactId)

    if (!contactDetailsById || contactDetailsById.user_id.toString() !== req.user._id) {
        res.status(404)
        throw new Error("Conatct Id not found")
    }

    await conatctModel.findByIdAndDelete(contactId)

    res.status(201).json({
        "data": "data got deleted successfully !!!"
    })
})

export { getAllContact, getContactById, createNewContact, updateOldContact, deleteOldContact }