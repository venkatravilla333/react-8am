

function FunCom(props) {
  console.log(props)
  var name = 'sachin'
  return <h1>This is functional com, {name}, {props.age}</h1>
}
export default FunCom