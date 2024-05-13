import { getData } from "../db/temp_db.js"

const getAllContact=(req,res)=>{
    res.status(200).json({
        "data":getData()
    })
}

export default getAllContact