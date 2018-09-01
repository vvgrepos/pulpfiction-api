const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const client = new Client();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Barbosinha é gay!",
        version: "0.0.1",
        rodigao: "viado",
        gavetinha: "humilde",
        barbosinha: "rico",
        adiel: "igreja"
    });

    getUser();
});

function getUser(){
    await client.connect()
    let res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message)
    await client.end()
}

module.exports = router;