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

console.log(cn)

db.open(cn, function (err) {
if (err) return console.log(err)

db.query('select * from PUB.customer', function (err, data) {
  if (err) console.log(err)
  
  //console.log(data)
  for (const row of data) {
    console.log(row)
  }

  db.close(function () {
    console.log('done')
  })
})
})
