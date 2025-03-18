const express = require('express')
const app = expres();

const  port = Process.env.PORT || 3000;

app.use('/', require('./routers'));

app.listen(port, () => {console.log(`Running on port ${port}`)});