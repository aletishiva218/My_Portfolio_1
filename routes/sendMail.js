import sendMessage from "../utils/sendMessage.js";

const sendMail = (req,res) => {
    const {username,useremail,body} = req.body;
    sendMessage(username,useremail,body)
   res.json({status:"Ok",message:"Message sent successfull"})
}

export default sendMail;