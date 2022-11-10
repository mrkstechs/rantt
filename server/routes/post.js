const express = require('express')

const router = express.Router()
const postsController = require('../controllers/posts')

router.post('/', postsController.create)
router.get('/', postsController.all)
router.put('/:id', postsController.update)
router.delete('/:id', postsController.destroy)

module.exports = {router}