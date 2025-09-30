import { useState } from "react"
import { createPortal } from "react-dom"
import UserUidForm from "./UserUIDForm/userUidForm"

const UserInfoMod = ()=>{
   
    const [showModal,setShowModal] = useState(false)

    return(
        <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full " onClick={()=>{setShowModal(true)}}>
            Login
            </button>
            {
                showModal && createPortal(<UserUidForm showModal={()=>{setShowModal(false)}}/>,document.body)
            }
        </div>
    )
}

export default UserInfoMod