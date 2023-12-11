// import ""
// import '../index.css'
import { toolTypes } from '../constants/toolType'
import rect from '/rectangle.svg'
const IconButton = ({src, type}) =>{
  return <button className='menu_button'>  
    <img width='80%' height="80%" src={src}></img>
  </button>
}


const Menu = () => {
  return (
    <div
    className="menu_container"
    >
    <IconButton type={toolTypes.RECTANGLE} src={rect}/>
    </div>
  )
}
export default Menu