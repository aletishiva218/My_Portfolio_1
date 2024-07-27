import { skills } from "../Database/Modal.js";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const getSkills = async (req, res) => {
  const getSkills = await skills.find({});
  res.json({status:"Ok", skills: getSkills });
};

const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { key } = req.query;
  const { image, title, description } = req.body;
  const data = {};
  data.image = image;
  data.title = title;
  data.description = description;

  try {
    if (key != secretKey) throw "incorrect KEY";
    const getSkill = await skills.findOne({ _id: id });

    if (!getSkill) throw "incorrect id";

    await skills.updateOne({ _id: id }, { $set: data });

    res.json({status:"Ok", message: "skill updated successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

const createSkill = async (req, res) => {
  const { key } = req.query;
  const { image, title, description } = req.body;
  try {
    if (key != secretKey) throw "incorrect KEY";

    if (!(image && title && description)) throw "insufficient data";

    const data = {
      image: image,
      title: title,
      description: description
    };

    await skills.create(data);

    res.json({status:"Ok", message: "skill added successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

const deleteSkill = async (req, res) => {
  const { id } = req.params;
  const { key } = req.query;

  try {
    if (key != secretKey) throw "incorrect KEY";
    const getSkill = await skills.findOne({ _id: id });

    if (!getSkill) throw "incorrect id";

    await skills.deleteOne({ _id: id });

    res.json({status:"Ok", message: "skill deleted successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

export { getSkills, updateSkill, createSkill, deleteSkill };
