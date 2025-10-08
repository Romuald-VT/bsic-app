/* eslint-disable react/prop-types */
import { useState } from "react"
import { createPortal } from "react-dom"
import { FaPen } from "react-icons/fa"
import UpdateFormModal from "../Modals/UpdationModal"
import { Tooltip } from "react-tooltip"
import { CustomerDTO } from "@/lib/asset/definitions"

interface EmailButtonProps{
    userData:CustomerDTO;
    onEmailUpdated: ()=>void
}

const EmailButton:React.FC<EmailButtonProps> = ({userData, onEmailUpdated})=>{

    const [showModal,setShowModal] = useState(false)
    return(
        <>
           <button className="w-5 h-5 text-blue-600" 
           onClick={()=>{setShowModal(true)}} id="email"><FaPen/></button>
           <Tooltip anchorSelect="#email" place="top">
            Motifier les infos du client
           </Tooltip>
           {
             showModal && createPortal(<UpdateFormModal showModal={()=>{setShowModal(false)}} data={userData} onEmailUpdated={onEmailUpdated}/>,document.body)
           }
        </>
    )
}

export default EmailButton