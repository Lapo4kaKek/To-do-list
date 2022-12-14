const express = require('express');
const app = express();
const path = require('path')

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, ()=> {
    console.log(`Server started on PORT ${PORT}`);
});