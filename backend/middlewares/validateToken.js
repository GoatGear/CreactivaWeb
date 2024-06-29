import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req,res,next) =>{
    //console.log(req.headers);
    const {token} = req.cookies;
    if(!token) 
        return res.status(401).json({message: "No sacaste el token, authorización denied"});

    jwt.verify(token,TOKEN_SECRET,(err,user)=>{
        if (err) return res.status (403).json({message: "token nvalido"});
        //console.log(user);
        req.user =user  
        next();
    })
    
}