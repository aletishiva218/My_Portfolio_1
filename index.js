import path from "path";
import fs from "fs";
import express from "express";
import {getProjects,updateProject, createProject, deleteProject} from "./routes/projects.js";
import {getSkills,updateSkill, createSkill, deleteSkill} from "./routes/skills.js";
import {getCertificates,updateCertificate, createCertificate, deleteCertificate} from "./routes/certificates.js";
import {getData,updatedData,uploadImg,uploadResume} from "./routes/personal.js";
import sendMail from "./routes/sendMail.js";
import { uploadCv,uploadImage } from "./utils/multer.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

const port = process.env.PORT;

const _dirname = path.resolve();
const uploadFolder = path.join(_dirname,"uploads");
fs.mkdirSync(uploadFolder,{recursive:true})

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(uploadFolder))

app.get("/personal",getData)
app.patch("/personal",updatedData)
app.patch('/personal/image',uploadImage.single('image'),uploadImg)
app.patch("/personal/cv",uploadCv.single("cv"),uploadResume)

app.get("/projects",getProjects);
app.patch("/projects/:id",updateProject);
app.post("/projects",createProject);
app.delete("/projects/:id",deleteProject);

app.get("/certificates",getCertificates);
app.patch("/certificates/:id",updateCertificate);
app.post("/certificates",createCertificate);
app.delete("/certificates/:id",deleteCertificate);

app.get("/skills",getSkills);
app.patch("/skills/:id",updateSkill);
app.post("/skills",createSkill);
app.delete("/skills/:id",deleteSkill);

app.post("/message",sendMail)


app.listen(port,()=>console.log("Server is started at port",port))