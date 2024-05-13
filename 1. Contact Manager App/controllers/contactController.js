import { getData,getDataById } from "../db/temp_db.js"

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

export {getAllContact,getContactById}