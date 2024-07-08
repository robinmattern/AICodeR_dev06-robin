// server.mjs (Add this in the existing file)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
