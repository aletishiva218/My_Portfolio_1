import { personal } from "../Database/Modal.js";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const getData = async (req, res) => {
  let getData = await personal.findOne({});
  getData = {
    image: req.headers.host + "/Shiva_Aleti.jpg",
    cv: req.headers.host + "/Shiva_Aleti_Resume.pdf",
    ...getData._doc,
  };
  res.json({ status:"Ok",personal: getData });
};

const updatedData = async (req, res) => {
  const { key } = req.query;
  const { name, skills, keywords, about, description } = req.body;
  const data = {};
  data.name = name;
  data.skills = skills;
  data.description = description;
  data.keywords = keywords;
  data.about = about;

  try {
    if (key != secretKey) throw "incorrect KEY";

    await personal.updateOne({}, { $set: data });

    res.json({status:"Ok", message: "details updated successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

const upload = (req,res,next) => {
  const { key } = req.query;
  try{
    if(key!=secretKey) throw "incorrect KEY";
    next();
  }catch(err){
    res.json({error:err})
  }
}

export { getData, updatedData,upload };
