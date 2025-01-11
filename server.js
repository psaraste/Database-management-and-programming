import express from 'express'
import { pgPool } from './pg_connection.js'

const app = express()
app.use(express.json())


app.listen(3001,()=>{
    console.log('server running in port 3001');
});


app.get('/Genre', async (req,res) => {
    
    try {
        const result= await pgPool.query('SELECT * FROM Genre')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  
}); 

app.post('/Genre', async (req, res) => {

    const { genre_name } = req.body
    try {
        const result= await pgPool.query('INSERT INTO genre (genre_name) VALUES ($1) RETURNING *', [genre_name])
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})




app.get('/Movie', async (req,res) => {
    try {
        const result= await pgPool.query('SELECT * FROM Movie')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  
}); 

app.post('/Movie', async (req, res) => {

    const {movie_name, publishing_year} = req.body
    try {
        const result= await pgPool.query(
            'INSERT INTO movie (movie_name, publishing_year) VALUES ($1, $2) RETURNING *', [movie_name, publishing_year])
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})




app.get('/User_', async (req,res) => {
    
    try {
        const result= await pgPool.query('SELECT * FROM User')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  
}); 

app.post('/User_', async (req, res) => {

    const {user_name, username, user_password, year_of_birth} = req.body
    try {
        const result= await pgPool.query(
            'INSERT INTO User (user_name, username, user_password, year_of_birth) VALUES ($1, $2, $3, $4 ) RETURNING *', [user_name, username, user_password, year_of_birth])
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})




app.get('/Review', async (req,res) => {
    
    try {
        const result= await pgPool.query('SELECT * FROM Review')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  
}); 

app.post('/Review', async (req, res) => {

    const {stars, review_text} = req.body
    try {
        const result= await pgPool.query(
            'INSERT INTO Review (stars, review_text) VALUES ($1, $2) RETURNING *', [stars, review_text])
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})




app.get('/Favorite', async (req,res) => {
    
    try {
        const result= await pgPool.query('SELECT * FROM Favorite')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  
}); 
