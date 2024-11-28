import express from 'express';

const app = express();

app.listen(3001,()=>{
    console.log('server running in port 3001');
});

app.get('/Genre', async (req,res) => {
    res.send('Genre')
}); 

app.get('/Movie', async (req,res) => {
    res.send('Movie')
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