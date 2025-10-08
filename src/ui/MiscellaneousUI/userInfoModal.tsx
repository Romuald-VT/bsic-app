import { useState } from "react"
import { createPortal } from "react-dom"
import UserUidForm from "../UserUIDForm/userUidForm"
import Link from "next/link"

const UserInfoMod = ()=>{
   
    const [showModal,setShowModal] = useState(false)

    return(
        <div>
            <Link href="/memberlogin">
                <button className="bg-blue-500 text-white py-2 px-4 rounded w-full " onClick={()=>{setShowModal(true)}}>
                    Espace Membre
                </button>
            </Link>
            {
            //    showModal && createPortal(<UserUidForm showModal={()=>{setShowModal(false)}}/>,document.body)
            }
        </div>
    )
}

export default UserInfoMod