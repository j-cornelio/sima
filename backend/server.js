require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "srv1535.hstgr.io",
    database: "u707743927_contacts", 
    user: "u707743927_jcornelio",
    password: '9A_E-En1@#'
})

const port = process.env.PORT || 3000;

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO u707743927_contacts.users (`name`, `email`, `message`) Values (?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.message
    ]

    db.query(sql, [values], (err, data) => {
        if(res) return res.json(err)
        return res.json(data)
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})