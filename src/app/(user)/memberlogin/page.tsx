'use client'
import { handleGetUserByUUID } from "@/lib/service/customerService"
import { useSearchParams,useRouter } from "next/navigation"
import { Suspense, useActionState, useEffect, useState } from "react"


const MemberLoginForm = ()=>{
    
    const [uid,setUid] = useState('')
    const [state,formAction,isPending] = useActionState(handleGetUserByUUID,null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirect = searchParams.get('redirect') || '/memberinfo'

       useEffect(() => {
        if (state?.success) {
            router.refresh() // Rafraîchir pour mettre à jour le middleware
            router.push(redirect) // Rediriger vers la page protégée
        }
    }, [state, router, redirect])


    return(
            <div className="flex flex-row justify-center items-center h-screen w-screen overflow-x-clip">
                <div className="flex flex-col w-[400px] h-[300px] justify-center items-center border border-gray-300 rounded-lg p-6 shadow-lg bg-blue-50">
                    <div className="mb-6 text-2xl font-semibold relative top-[0px] w-full h-10 flex flex-row justify-center">
                        <p className="text-blue-500">Espace Membre</p>
                    </div>
                    <form
                    action={formAction}
                    className="flex flex-col justify-center gap-7 w-full relative top-[10px]">
                        <input type="text" 
                        value={uid} 
                        name="customerID"
                        onChange={e=>setUid(e.target.value)}
                        placeholder="Votre identifiant "
                        className="h-10 w-full font-light text-xl"/>
                        <button
                        className="border bg-blue-600 text-white font-medium w-28 h-10 rounded-md flex flex-col gap-3 relative left-[100px] border-black"
                        ><span className="relative top-2 left-1">{isPending?'Loading...':'Connexion'}</span></button>
                    </form>
                </div>
            </div>
    )
}

const MemberLogin = ()=>{
    return(
            <Suspense fallback={
            <div className="flex flex-row justify-center items-center h-screen w-screen">
                <div className="flex flex-col w-[400px] h-[300px] justify-center items-center border border-gray-300 rounded-lg p-6 shadow-lg bg-blue-50">
                <div className="animate-pulse">
                    <p className="text-blue-500 text-xl">Chargement...</p>
                </div>
                </div>
            </div>
            }>
                <MemberLoginForm />
            </Suspense>
    )
}

export default MemberLogin