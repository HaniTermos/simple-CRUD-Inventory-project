const express = require('express');
const router = express.Router();
const { getAllItems, getItemById, createNewItemGet, createNewItemPost, 
        updateItemGet, updateItemPost, deleteItemGet, deleteItemPost 
    } = require('../controllers/itemsController');

router.get('/new', createNewItemGet);
router.get('/', getAllItems);

router.get('/:id', getItemById);

router.post('/', createNewItemPost);

router.post('/:id/delete', deleteItemPost);

router.get('/:id/edit', updateItemGet);
router.post('/:id', updateItemPost);


module.exports = router;