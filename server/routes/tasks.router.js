const express = require('express');
const router = express.Router();
const pool = require( '../modules/pool' );

// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get('/', (req, res) => {
    let queryString = `SELECT * 
                        FROM tasks
                        ORDER BY id DESC`
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END PUT Route

// PUT Route

// POST Route

// DELETE ROUTE

module.exports = router;