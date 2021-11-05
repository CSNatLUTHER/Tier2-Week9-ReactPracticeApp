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
router.put( '/:id', (req, res )=>{
    console.log( '/list PUT:', req.params );
    const queryString = `UPDATE "shopping_list" SET "purchased"=TRUE WHERE id=$1;`;
    const values = [ req.params.id ];
    pool.query( queryString, values ).then( (results)=>{
        res.send( 200 );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})


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
router.delete( '/:id', (req, res)=>{
    const queryString = `DELETE FROM "shopping_list" where id=${req.params.id};`
    pool.query( queryString ).then( (results)=>{
      res.sendStatus( 201 );
    }).catch( (err)=>{
      console.log( err );
      res.sendStatus( 500 );
    })
  })


module.exports = router;