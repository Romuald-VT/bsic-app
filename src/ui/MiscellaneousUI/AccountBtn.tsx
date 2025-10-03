 
import { useState } from "react"
import { createPortal } from "react-dom"
import { FaUser } from "react-icons/fa6"
import { Tooltip } from "react-tooltip"
import AccountButton from "../Modals/AccountBtn"

interface AccountTypeProps {
    email:string;
    onAccountUpdated:()=>void;
}

const AccountType:React.FC<AccountTypeProps> = ({email, onAccountUpdated}) => {
    
    const [showModal, setShowModal] = useState(false)
    
    return(
        <>
           <button className="w-5 h-5 text-blue-600" 
           onClick={() => {setShowModal(true)}} id="account-type">
               <FaUser/>
           </button>
           <Tooltip anchorSelect="#account-type" place="top">
              Modifier le Type de compte
           </Tooltip>
           {
             showModal && createPortal(
                 <AccountButton 
                     showModal={() => {setShowModal(false)}} 
                     email={email}
                     onAccountUpdated={onAccountUpdated} // 👈 Nouvelle prop
                 />, 
                 document.body
             )
           }
        </>
    )
}

export default AccountType