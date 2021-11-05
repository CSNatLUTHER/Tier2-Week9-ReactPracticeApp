const express = require('express');
const router = express.Router();
const pool = require( '../modules/pool' );

// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get('/', (req, res) => {
    let queryString = `SELECT * 
                        FROM shopping_list
                        ORDER BY id ASC`
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END PUT Route

// PUT Route

// POST Route
router.post('/', (req, res)=>{
    console.log('/list POST:', req.body);
    const queryString = `INSERT INTO "shopping_list"("item", "description", "price") VALUES( $1, $2, $3 );`;
    const values = [ req.body.item, req.body.description, req.body.price ];
    pool.query(queryString, values).then( (results)=>{
        res.sendStatus( 201 );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})

// DELETE ROUTE

module.exports = router;