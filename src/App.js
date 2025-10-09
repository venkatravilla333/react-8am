import ClassCom from "./Component/ClassCom"
import FunCom from "./Component/FunCom"


function App() {
  var age = 40
  return <div>
    <FunCom age={age} />
    <ClassCom/>
    {/* {new ClassCom().render()} */}
    {/* {FunCom()} */}
  </div>
}

export default App