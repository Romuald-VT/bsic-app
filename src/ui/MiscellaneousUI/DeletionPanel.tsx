/* eslint-disable react/prop-types */
import { useState } from "react"
import { createPortal } from "react-dom"
import { IoTrash } from "react-icons/io5"
import { Tooltip } from "react-tooltip"

import DeleteDialogBox from "../Modals/DeletionModal" // Assurez-vous du chemin correct

interface DeleteButtonProps{
    item: {email:string};
    onCustomerDeleted:()=>void
}

// Ajoutez onCustomerDeleted aux props que DeleteButton reçoit
const DeleteButton:React.FC<DeleteButtonProps>=({item, onCustomerDeleted})=>{

    const[showModal,setShowModal] = useState(false)

    return(

        <>
           <button className="w-5 h-5 text-blue-600" onClick={()=>{setShowModal(true)}} id="deleteMsgBox"><IoTrash/></button>
           <Tooltip anchorSelect="#deleteMsgBox" place="top">
            Supprimer ce compte
           </Tooltip>
           {
             showModal && createPortal(
                <DeleteDialogBox 
                    showModal={()=>{setShowModal(false)}} 
                    email={item.email} 
                    onCustomerDeleted={onCustomerDeleted} // 👈 Transmettez la prop ici !
                />,
                document.body
            )
           }
        </>
    )
}

export default DeleteButton;