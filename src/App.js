// import ClassCom from "./Component/ClassCom"
// import FunCom from "./Component/FunCom"
// import Jsx from "./JSX/Jsx"
// import Parent from "./Props/parent-to-child/Parent"
// import Fetchdata from "./SideEffects/Making-Api-Calls/Fetchdata"

import Parent from "./Props/child-to-child/Parent"

// import Parent from "./Props/child-to-parent/Parent"


function App() {
  // var age = 40
  return <div>
    {/* <FunCom age={age} />
    <ClassCom/> */}
    {/* {new ClassCom().render()} */}
    {/* {FunCom()} */}
    {/* <Jsx/> */}
    {/* <Fetchdata/> */}
    {/* <Parent/> */}
    {/* <Parent/> */}
  <Parent/>
  </div>
}

export default App