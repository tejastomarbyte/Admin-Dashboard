import React,{useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArroyDown} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'; 
import avatar from '../data/avatar.jpg';
import {Cart,Chat,Notification,UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';


const NavButton=({title,customFunc,icon,color,dotColor}) =>{

  return (<TooltipComponent 
  content={title}
  position="BottomCenter">
    <button type="button" onClick={customFunc} 
    style={{color}} className="relative text-x1 rounded-full p-3 hover:bg-light-gray">
      <span style={{background:dotColor}}>

      </span>
    </button>
  </TooltipComponent>)
}


const Navbar = () => {
  
  const {activeMenu, setActiveMenu} =useStateContext();
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={()=>setActiveMenu((prev)=>!prev)} color="blue" icon={<AiOutlineMenu/>} />
        
      
    </div>
  )
}

export default Navbar