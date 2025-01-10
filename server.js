import express from 'express';
import { pgPool } from './pg_connection.js'

const app = express();
app.use(express.urlencoded({extended: true}))

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

    const genre_name = req.body
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

app.get('/User_', async (req,res) => {
    res.send('User_')
});

app.get('/Review', async (req,res) => {
    res.send('Review')
});

app.get('/Favorite', async (req,res) => {
    res.send('Favorite')
});