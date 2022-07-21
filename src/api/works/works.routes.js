const WorksRoutes = require('express').Router();
const { isAuth } = require('../middlewares/auth.middleware');
const upload = require("../middlewares/updateFile. middleware");


const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne,
} = require('./works.controller');

WorksRoutes.get('/', getAll);
WorksRoutes.get('/:id', getOne);
WorksRoutes.post('/',[isAuth], upload.single('img'), postOne);
WorksRoutes.patch('/:id',[isAuth], upload.single('img'), patchOne);
WorksRoutes.delete('/:id',[isAuth], deleteOne);

module.exports = WorksRoutes;