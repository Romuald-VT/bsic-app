/* eslint-disable react/prop-types */
import { useState } from "react"
import { createPortal } from "react-dom"
import { FaDollarSign } from "react-icons/fa6"
import AmountDialog from "../Modals/AmountModal"
import { Tooltip } from "react-tooltip"

interface DollarButtonProps {
    amount:number;
    email:string;
    onAmountUpdated:()=>void;
}

const DollarButton: React.FC<DollarButtonProps>= ({amount, email, onAmountUpdated}) => {
    
    const [showModal, setShowModal] = useState(false)
    
    return(
        <>
           <button className="w-5 h-5 text-blue-600" 
           onClick={() => {setShowModal(true)}} id="amount">
               <FaDollarSign/>
           </button>
           <Tooltip anchorSelect="#amount" place="top">
            Modifier le montant du compte
           </Tooltip>
           {
             showModal && createPortal(
                 <AmountDialog 
                     showModal={() => {setShowModal(false)}} 
                     number={amount} 
                     email={email}
                     onAmountUpdated={onAmountUpdated} // 👈 Nouvelle prop
                 />, 
                 document.body
             )
           }
        </>
    )
}

export default DollarButton