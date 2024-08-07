import fs from "fs";
import { personal } from "../Database/Modal.js";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const getData = async (req, res) => {
  let getData = await personal.findOne({});
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

const uploadImg = async (req,res) => {
  let data = req.body.toString('base64');
  data = "data:image/png;base64,"+data;
  await personal.updateOne({},{image:data});
  res.send({status:"Ok",message:"Image uploaded successfully"});
}

const uploadResume =async (req,res) => {
  let data = req.body.toString('base64');
  data = "data:application/pdf;base64,"+data;
  await personal.updateOne({},{cv:data});
  res.send({status:"Ok",message:"cv uploaded successfully"});
}

export { getData, updatedData,uploadImg,uploadResume };
