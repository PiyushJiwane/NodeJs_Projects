import errorConstants from "../constants/errorConstants.js";

const sendResponse=(res,code,title,err)=>{
    res.statusCode(code).json({title:"Validation Failed",message:err.message,stackTrace:err.stack})
}

const errorHandler=(err,req,res,next)=>{
    const code=res.statusCode ? res.statusCode : 500

    switch (code) {
        case errorConstants.VALIDATION_ERROR:
            sendResponse(res,code,"Validation Error",err)
            break;
        case NOT_FOUND:
            sendResponse(res,code,"Not Found",err)
            break;
        default:
            console.log("no error found !!!");
            break;
    }

    res.statusCode(code).json({title:"Not Found !!!",message:err.message,stackTrace:err.stack})
}

export default errorHandler