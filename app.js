const
  express = require('express'),
  app = express(),
  { join } = require('path'),
  PORT = 4660,
  { rainbow } = require('handy-log'),
  favicon = require('serve-favicon')

app.use(favicon(
  join(__dirname, '/images/favicon.png')
))
app.use(express.static(
  join(__dirname, '/dist')
))

app.get('*', (req, res) => {
  res.sendFile(
    join(__dirname, '/index.html')
  )
})

app.listen(PORT, () =>
  rainbow('App running..')
)
