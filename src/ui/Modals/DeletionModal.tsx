'use client'

import { handleCustomerDeletion } from "@/lib/service/customerService";
import { toast } from "react-toastify";

interface DeleteDialogBoxProps{
    email:string;
    showModal:()=>void;
    onCustomerDeleted:()=>void;
}
const DeleteDialogBox:React.FC<DeleteDialogBoxProps>= ({email, showModal, onCustomerDeleted}) => {
    
  const handleDeletion = async()=>{
    const data = await handleCustomerDeletion(email)
    if(!data)
    {
      toast.error('suppression impossible !')
    }
    toast.success('suppression reussie !')
    onCustomerDeleted()
    showModal()
  }
  return (
    <>
      <div onClick={showModal} className="fixed inset-0 bg-slate-700/40"></div>
      
      <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[150px] flex flex-col">
        <div className="w-full h-9 bg-blue-700">
          <div className="text-white font-normal relative top-2 left-2">
            Supprimer le compte
          </div>
          <button
            className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm"
            onClick={showModal}
          >
            x
          </button>
        </div>
        
        <div className="relative left-6 top-6">
          Souhaitez-vous supprimer cette entrée ?
        </div>
        
        <div className="flex flex-row gap-[120px] mb-2 relative top-10 left-8">
          <button
            onClick={handleDeletion}
            className="bg-blue-700 text-white w-[75px] h-[40px] rounded-lg hover:bg-blue-500 transition-colors"
          >
            Oui
          </button>
          <button
            onClick={showModal}
            className="bg-blue-700 text-white w-[75px] h-[40px] rounded-lg hover:bg-blue-500 transition-colors"
          >
            Non
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteDialogBox;