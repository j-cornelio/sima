// https://www.youtube.com/watch?v=Lb9Basl0StM&t=552s

import mysql2 from 'mysql2';

const pool = mysql2.createPool({
    host: "srv1535.hstgr.io",
    database: "u707743927_contacts", 
    user: "u707743927_jcornelio",
    password: '33n+=l1iLL'
})

pool.query('select * from u707743927_contacts.users', (err, res) => {
    return  res || err
})

/*
pool.query('INSERT INTO u707743927_contacts.users (name, email, message) VALUES("AAA", "BBB", "CCC")', 
    (err, res) => {
    return  console.log(res || err)
})
*/

export default pool;