import { getData,getDataById,setData,updateData} from "../db/temp_db.js"

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

const updateOldContact=(req,res)=>{
    const id=req.params.id
    const {name}=req.body
    updateData(id,name)
    res.status(201).json({
        "data":"data got updated successfully !!!"
    })
}

export {getAllContact,getContactById,createNewContact,updateOldContact}