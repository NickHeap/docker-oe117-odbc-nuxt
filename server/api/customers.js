const express = require('express')
const router = express.Router()

/* GET customers listing. */
router.get('/customers', function (req, res, next) {

  var host
  var driver
  if (process.platform === "win32") {
    host = 'localhost'
    driver = 'DRIVER=Progress Openedge 11.7 Driver'
  } else {
    host = 'oe117-db'
    driver = 'DSN=OpenEdgeODBC'
  }
  
  var db = require('odbc')()
    , cn = driver + ';PORT=20666;HOST=' + host + ';UID=SYSPROGRESS;PWD=SYSPROGRESS;DATABASE=openedge'
  
  db.open(cn, function (err) {
    if (err) {
      res.status(500).send({ error: err })
      return
    }

    db.query('select * from PUB.customer', function (err, data) {
      if (err) {
        res.status(500).send({ error: err })
        return
      }

      db.close(function () {
        console.log('done')
      })

      res.json(data)
    })
  })
})

/* GET customers by ID. */
router.get('/customers/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
