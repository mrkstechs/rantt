const {db} = require('../db/init')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.body = data.body
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(post => new Post(post))
                resolve(posts)
            } catch (error) {
                reject("Error occured while retrieving posts")
            }
        })
    }

    static create(title, name, body) {
        return new Promise(async (resolve, reject) => {
            try {
                const postData = await db.query(`INSERT INTO posts (title, name, body) VALUES ($1, $2) RETURNING *;`, [title, name, body])
                const newPost = new Post(postData.rows[0])
                resolve(newPost)
            } catch (error) {
                reject('Error creating post!')
            }
        })
    }

    static update(id, title, body) {
        return new Promise(async (resolve, reject) => {
            try {
                const updatedPostData = await db.query(`UPDATE posts SET id = id, title = title, body = body WHERE id = $1, title = $2, body = $3 RETURNING *;`, [id, title, body])
                const updatedPost = new Post(updatedPostData.rows[0])
                resolve(updatedPost)
            } catch (error) {
                reject('Error updating post')
            }
        })
    }

    static delete(id) {
        return new Promise(async (resolve, reject) => {
            try {
                await db.query(`DELETE FROM posts WHERE id = $1`, [id])
                resolve('Posted deleted!')
            } catch (error) {
                reject("Post couldn't be deleted")
            }
        })
    }
}

module.exports = {Post}