const express = require('express');

const app =  express();
app.use(express.json());

app.use((req ,res ,next)=>{
    console.log("first middleware");
    next();
});


app.use((req ,res ,next)=>{
    console.log("second middleware");
    res.send("<h1>Hello express!</h1>");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
