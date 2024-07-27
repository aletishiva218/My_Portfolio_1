import { projects } from "../Database/Modal.js";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const getProjects = async (req, res) => {
  const getProjects = await projects.find({});
  res.json({status:"Ok", projects: getProjects });
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { key } = req.query;
  const { image, title, description, url } = req.body;
  const data = {};
  data.image = image;
  data.title = title;
  data.description = description;
  data.url = url;

  try {
    if (key != secretKey) throw "incorrect KEY";
    const getProject = await projects.findOne({ _id: id });

    if (!getProject) throw "incorrect id";

    await projects.updateOne({ _id: id }, { $set: data });

    res.json({status:"Ok", message: "project updated successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

const createProject = async (req, res) => {
  const { key } = req.query;
  const { image, title, description, url } = req.body;
  try {
    if (key != secretKey) throw "incorrect KEY";

    if (!(image && title && description && url)) throw "insufficient data";

    const data = {
      image: image,
      title: title,
      description: description,
      url: url,
    };

    await projects.create(data);

    res.json({status:"Ok", message: "project added successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  const { key } = req.query;

  try {
    if (key != secretKey) throw "incorrect KEY";
    const getProject = await projects.findOne({ _id: id });

    if (!getProject) throw "incorrect id";

    await projects.deleteOne({ _id: id });

    res.json({status:"Ok", message: "project deleted successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

export { getProjects, updateProject, createProject, deleteProject };
