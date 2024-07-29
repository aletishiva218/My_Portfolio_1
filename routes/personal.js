import fs from "fs";
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


const uploadImg =  (req, res) => {
  const { key } = req.query;
  try {

    if(key!=secretKey) throw "Incorrect KEY";
    // Get the temporary path of the uploaded file
    const tempPath = req.file.path;

    // Read the file
    fs.readFile(tempPath, async (err, data) => {
      if (err) throw err;

      // Convert image file to Base64 encoding
      const base64Image = data.toString('base64');
      await personal.updateOne({},{$set:{image:"data:image/png;base64,"+base64Image}})
      // Remove the temporary file
      fs.unlink(tempPath, (err) => {
        if (err) throw err;
        console.log('Temp File Deleted');
      });

      // Send the Base64 string back to client
      res.json({status:"Ok",message:"updated successfully"});
    });
  } catch (err) {
    res.status(500).send({error:err});
  }
}

const uploadResume =  (req, res) => {
  const { key } = req.query;
  try {

    if(key!=secretKey) throw "Incorrect KEY";
    // Get the temporary path of the uploaded file
    const tempPath = req.file.path;

    // Read the file
    fs.readFile(tempPath, async (err, data) => {
      if (err) throw err;

      // Convert image file to Base64 encoding
      const base64Image = data.toString('base64');
      await personal.updateOne({},{$set:{cv:"data:application/pdf;base64,"+base64Image}})
      // Remove the temporary file
      fs.unlink(tempPath, (err) => {
        if (err) throw err;
        console.log('Temp File Deleted');
      });

      // Send the Base64 string back to client
      res.json({status:"Ok",message:"updated successfully"});
    });
  } catch (err) {
    res.status(500).send({error:err});
  }
}

export { getData, updatedData,uploadImg,uploadResume };
