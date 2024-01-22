const express = require("express");
const app = express();
const { todo } = require("./db");
const { createtodo, updatetodo } = require("./input");
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.post('/createtodo', async function(req, res) {
    const createtodopayoad = req.body;
    const createtodovalidation = createtodo.safeParse(createtodopayoad);
    
    if (!createtodovalidation.success) {
        res.status(411).json({
            "Msg": "You have sent a wrong input"
        });
        return;
    }
    
    await todo.create({
        title: createtodopayoad.title,
        description: createtodopayoad.description,
        completed: false
    });
    
    res.json({
        "Msg": "Your todo has been added"
    });
});


app.put("/updatetodo", async function(req, res) {
    const updatetodopayload = req.body._id;
    console.log(updatetodopayload);
    
    await todo.updateOne({
        _id: updatetodopayload
    }, {
        completed: true  
    });
});

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json(todos);
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
