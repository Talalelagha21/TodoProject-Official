import React from 'react'
import { AiOutlineClose } from "react-icons/ai"


interface ModalProps { 
    modalOpen: boolean, 
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode,
    height: number
}



const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children, height}) => {
  
  return (
    <div className={`modal  ${modalOpen ? "modal-open": ""} `}>
      <div className="modal-box relative overflow-y-hidden" style={{height: `${height}vh`}}>
        <button className=' bg-sidebar rounded-full  absolute right-5 ' onClick={ () => setModalOpen(false)} >
            <AiOutlineClose size={20} className='bg-white-1'/>
          </button>
        <div className="modal-action h-[45vh] ">
        {children}
        </div>
      </div>
    </div>
  )
}

export default Modal