import LoginForm from "@/ui/AdminUI/LoginUI"
import { Suspense } from "react"

const AdminPage = ()=>{

    return(
        <>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm/>
        </Suspense>
        </>
    )
}

export default AdminPage