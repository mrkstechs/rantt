const {Post} = require('../models/Post')

async function all(req, res){
    try {
        const posts = await Post.all
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function update(req, res){
    try {
        const {id} = req.params
        const {title, body} = req.body
        const updatedPost = await Post.update(parseInt(id), title, body)
        res.status(201).json(updatedPost)
    } catch (error) {
        res.status(501).json({error})
    }
}

async function create(req, res){
    try {
        console.log(req.body)
        const {title, name, body} = req.body
        const newPost = await Post.create(title, name, body)
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json({error})
    }
}

async function destroy(req, res){
    try {
        const post = await Post.delete(parseInt(req.params.id))
        res.status(204).json(post)
    } catch (error) {
        res.status(404).json({error})
    }
}

module.exports = {all, update, create, destroy}