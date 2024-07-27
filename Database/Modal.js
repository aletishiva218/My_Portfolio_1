import mongoose from "./config.js";

const projectSchema = mongoose.Schema({
    title:String,
    image:String,
    description:String,
    url:String
})

const skillsSchema = mongoose.Schema({
    title:String,
    image:String,
    description:String,
    url:String
})

const certificatesSchema = mongoose.Schema({
    title:String,
    image:String,
    description:String,
    url:String
})

const personalSchema = mongoose.Schema({
    name:String,
    skills:Array,
    keywords:Array,
    about:String,
    description:Array
})

const projects = new mongoose.model("projects",projectSchema)
const skills = new mongoose.model("skills",skillsSchema)
const certificates = new mongoose.model("certificates",certificatesSchema)
const personal = new mongoose.model("personal",personalSchema,"personal")

export {projects,skills,certificates,personal};