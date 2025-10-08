import LoginForm from "@/ui/AdminUI/LoginUI"
import { Suspense } from "react"

const AdminPage = ()=>{

    return(
        <>
        <Suspense fallback={
           <div className="flex flex-row justify-center items-center h-screen w-screen">
        <div className="flex flex-col w-[400px] h-[300px] justify-center items-center border border-gray-300 rounded-lg p-6 shadow-lg bg-blue-50">
          <div className="animate-pulse">
            <p className="text-blue-500 text-xl">Chargement...</p>
          </div>
        </div>
      </div>
        }>
          <LoginForm/>
        </Suspense>
        </>
    )
}

export default AdminPage