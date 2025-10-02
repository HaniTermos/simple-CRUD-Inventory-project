const express = require('express');
const router = express.Router();
const { getAllCategories, getCategoryById, createNewCategoryGet, createNewCategoryPost, 
        updateCategoryGet, updateCategoryPost, deleteCategoryPost 
    } = require('../controllers/categoriesController');

router.get('/new', createNewCategoryGet);
router.get('/', getAllCategories);

router.get('/:id', getCategoryById);

router.post('/', createNewCategoryPost);

router.get('/:id/edit', updateCategoryGet);
router.post('/:id', updateCategoryPost); 

router.post('/:id/delete', deleteCategoryPost);

module.exports = router;