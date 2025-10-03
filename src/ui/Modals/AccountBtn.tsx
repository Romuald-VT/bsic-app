'use client'
import { useState } from "react"
import { toast } from "react-toastify"

interface AccountButtonProps{
    showModal: ()=>void;
    email: string,
    onAccountUpdated: ()=>void
}

const AccountButton: React.FC<AccountButtonProps>= ({ showModal, email, onAccountUpdated }) => {
  const [accountType, setAccountType] = useState("Compte Epargne")


  return (
    <>
      {/* Overlay */}
      <div
        onClick={showModal}
        className="fixed inset-0 bg-slate-700/40"
      ></div>

      {/* Conteneur modal */}
      <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[200px] rounded-md shadow-lg flex flex-col">
        {/* En-tête */}
        <div className="w-full h-10 bg-blue-700 flex items-center justify-between px-3">
          <span className="text-white font-medium">
            Modifier le type de compte
          </span>
          <button
            className="w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm rounded"
            onClick={showModal}
          >
            x
          </button>
        </div>

        {/* Contenu centré */}
        <div className="flex flex-col justify-center items-center flex-grow gap-6 p-4">
          <select
            className="w-full max-w-xs h-12 px-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="Compte Epargne">Compte Epargne</option>
            <option value="Compte Courant">Compte Courant</option>
            <option value="Compte OffShore">Compte Offshore</option>
          </select>

          <button
            className="text-white bg-blue-600 w-full max-w-xs h-12 font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Mettre à jour
          </button>
        </div>
      </div>
    </>
  )
}

export default AccountButton
