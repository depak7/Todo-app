import { useState } from "react";

export function Createtodo(props)
{
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    

    return <div>
        <input type="text" placeholder="title" onChange={function(e){
           let tit= e.target.value;
           settitle(tit);

        }}></input>
         <input type="text" placeholder="description" onChange={function(e){
           let des= e.target.value;
           setdescription(des);

        }}></input>
        <button onClick={()=>{
            fetch("http://localhost:3000/createtodo",
            {
                method:"POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async function (res) {
                const data = await res.json();
                console.log(data);
                alert("Machii todo potachu XD");
            })
        }}>Add a todo bruh! </button>
    </div>


}