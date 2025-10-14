import ClassCom from "./Component/ClassCom"
import FunCom from "./Component/FunCom"
import Jsx from "./JSX/Jsx"
import Fetchdata from "./SideEffects/Making-Api-Calls/Fetchdata"


function App() {
  // var age = 40
  return <div>
    {/* <FunCom age={age} />
    <ClassCom/> */}
    {/* {new ClassCom().render()} */}
    {/* {FunCom()} */}
    {/* <Jsx/> */}
  <Fetchdata/>
  </div>
}

export default App