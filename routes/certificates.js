import { certificates } from "../Database/Modal.js";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const getCertificates = async (req, res) => {
  const getCertificates = await certificates.find({});
  res.json({status:"Ok", certificates: getCertificates });
};

const updateCertificate = async (req, res) => {
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
    const getCertificate = await certificates.findOne({ _id: id });

    if (!getCertificate) throw "incorrect id";

    await certificates.updateOne({ _id: id }, { $set: data });

    res.json({status:"Ok", message: "certificate updated successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

const createCertificate = async (req, res) => {
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

    await certificates.create(data);

    res.json({status:"Ok", message: "certificate added successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

const deleteCertificate = async (req, res) => {
  const { id } = req.params;
  const { key } = req.query;

  try {
    if (key != secretKey) throw "incorrect KEY";
    const getCertificate = await certificates.findOne({ _id: id });

    if (!getCertificate) throw "incorrect id";

    await certificates.deleteOne({ _id: id });

    res.json({status:"Ok", message: "certificates deleted successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

export { getCertificates, updateCertificate, createCertificate, deleteCertificate };
