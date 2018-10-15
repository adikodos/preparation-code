const mysql = require('mysql');

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'admin1234',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
    let sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('Table created: '+result);
    });
});

// create database, minus config database params
con.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
    const sql = 'CREATE DATABASE mydb'
    con.query(sql, (err, res) => {
        if(err) throw err;
        console.log('Result: '+res);
    });
});

// create table
con.connect((err) => {
    if(err) throw err;
    console.log('connected!');
    const sql = 'CREATE TABLE customer (name VARCHAR(255), address VARCHAR(255))';
    const sequel = 'CREATE TABLE customer (name VARCHAR(255), address VARCHAR(255))';
    con.query(sql, (err, res) => {
        if(err) throw err;
        console.log('Table created'+res);
    })
});

con.connect((err) => {
    if(err) throw err;
    console.log('connected!');
    const sql = 'CREATE TABLE customer (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255) )';
    con.query(sql, (err, res) => {
        if(err) throw err;
        console.log('Table created', res);
    })
})

con.connected((err) => {
    if(err) throw err;
    console.log('connected');
    const sql = 'ALTER TABLE customer ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
    con.query(sql, (err, res) => {
        if(err) throw err;
        console.log('Table Altered'+res);
    })
})
