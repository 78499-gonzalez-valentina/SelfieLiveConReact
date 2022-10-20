import Hijo from "./components/Hijo";

const people = [
{
  name: "Juan",
  age: 54
},
{
  name: "Mati",
  age: 22
},{
  name: "Emi",
  age: 16
}
]

const App = () => {
  return (
    <div>
      <Hijo datos ={people} />
    </div>
  );
}

export default App;
