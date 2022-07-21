const Works = require("./works.model");
const { deleteImgCloudinary } = require("../middlewares/deleteFile.middleware");
const { setError } = require('../../utils/error/error');



const getAll = async (req, res, next) => {
  try {
    const works = await Works.find();
    res.status(200).json(works);
  } catch (error) {
    return next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const works = await Works.findById(id);
    res.status(200).json(works);
  } catch (error) {
    return next(error);
  }
};

const postOne = async (req, res, next) => {
  try {
    const works = new Works();
    works.name = req.body.name;
    if (req.file) works.img = req.file.path;

    const worksDB = await works.save();
    return res.status(201).json(worksDB);
  } catch (error) {
    return next(error);
  }
};

const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const works = new Works(req.body);
    works.name = req.body.name;
     if (req.file) works.img = req.file.path;
    works._id = id;
     const updateWorks = await Works.findByIdAndUpdate(id, works);
     return res.status(200).json(updateWorks);
  } catch (error) {
     return next(error);
   }
 };

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const works = await Works.findByIdAndDelete(id);
    if (works.img) deleteImgCloudinary(works.img);

    return res.status(200).json(works);
  } catch (error) {
    return next(error);
  }
};


module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
};
