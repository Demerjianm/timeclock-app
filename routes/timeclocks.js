const express = require('express');
const router = express.Router();
const Timeclock = require('../models/timeclock');
//CRUD
//GET - fetching data from database
//POST - create new document in database in mongo,
//PUT - update an existing document
//DELETE - destroying a existing document

router.get('/', (req, res) => {
  Timeclock.find( ( err, timeclocks) => {
    res.json(timeclocks);
  });
});

//{ title: 'example', body: 'new body'}
router.post('/', (req, res) => {
  let {     
    vendor,
    model,
    wholesale,
    retailPrice,
    description
    } = req.body;
  new Timeclock({
    vendor,
    model,
    wholesale,
    retailPrice,
    description
  }).save( (err, timeclock) => {
    if (err)
      return res.json(err);
    return res.json(timeclock);
  });
});


// DELETE - localhost:3001/api/notes/_!@$#@RWFD%^
// if under new, add { upsert : true }, will create a new note if did not find a matching result
// without new, will return the old model, but with new true, will return the updated model from mongo
router.put('/:id', (req, res) => {
  let { title, body,  lender, em, sd, dd, fa, sm  } = req.body;
  Timeclock.findByIdAndUpdate(
    req.params.id,
    { $set: { 
        vendor,
        model,
        wholesale,
        retailPrice,
        description,
        updatedAt: Date.now() }},
    { new: true },
    ( err, timeclock) => {
      if (err)
        return res.json(err)
      return res.json(timeclock)
    }
  )
});

router.delete('/:id', (req, res) => {
  Timeclock.findByIdAndRemove(req.params.id, (err) => {
    if (err)
      return res.json(err)
    return res.sendStatus(204);
  });
});

module.exports = router;