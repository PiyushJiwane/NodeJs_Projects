import { getData,getDataById,setData } from "../db/temp_db.js"

const getAllContact=(req,res)=>{
    res.status(200).json({
        "data":getData()
    })
}

const getContactById=(req,res)=>{
    res.status(200).json({
        "data":getDataById(req.params.id)
    })
}

const createNewContact=(req,res)=>{
    const {id,name}=req.body
    setData(id,name)
    res.status(201).json({
        "data":"data got saved successfully !!!"
    })
}

export {getAllContact,getContactById,createNewContact}