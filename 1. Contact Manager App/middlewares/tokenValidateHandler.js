import jwt from "jsonwebtoken"
const JWT_SECRETE_KEY=process.env.JWT_SECRETE_KEY

const jwtTokenValidater=(req,res,next)=>{
    let token;
    const authHeader=req.headers.Authorization || req.headers.authorization

    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1]
        console.log(token);
    }

    const jwt_data=jwt.verify(token,JWT_SECRETE_KEY)

    req.user=jwt_data
    next()
}

export default jwtTokenValidater