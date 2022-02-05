import { useEffect } from "react";


function App() {

useEffect(() => {
  fetch("http://localhost:3000/api/v1/restaurants")
  .then(r=>r.json())
  .then(data=> console.log(data))
}, []);



  return (
    <div className="App">
<h1>Hello</h1>
    </div>
  );
}

export default App;
