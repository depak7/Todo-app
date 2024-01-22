export function Todos({todos}) {
    const handleToggle = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/updatetodo`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _id: id,
              // Include other properties you want to update
              // ...
            }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          // Assuming you want to update the state after a successful update
          // Update the state or trigger a re-fetch here if needed
        } catch (error) {
          console.error("Error updating todo:", error);
        }
      };
      

    return <div>
        {todos.map(function(todo) {
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => {handleToggle(todo._id)
                console.log(todo._id)
                }}>
              {todo.completed ? 'Completed' : 'Mark as Complete'}
            </button>
            </div>
        })}
    </div>
}