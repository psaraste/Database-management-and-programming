import express from 'express';
import pg from 'pg'


const app = express();


const {client} = pg;

 



app.listen(3001,()=>{
    console.log('server running in port 3001');
});

