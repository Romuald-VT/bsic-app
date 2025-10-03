'use client'
import { useState } from "react"
import { toast } from "react-toastify"


interface AmountDialogProps {
    number:number;
    showModal:()=>void;
    email:string;
    onAmountUpdated:()=>void
}

const AmountDialog:React.FC<AmountDialogProps> = ({number, showModal, email, onAmountUpdated}) => {

    

    return(
        <>
            <div 
                onClick={showModal}
                className="fixed inset-0 bg-slate-700/40 ">
            </div>
            
            <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[180px] flex flex-col">
                <div className="w-full h-9 bg-blue-700">
                    <div className="text-white font-normal relative top-2 left-2">
                        Modifier le solde
                    </div>
                    <button 
                        className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm" 
                        onClick={showModal}
                    >
                        x
                    </button>
                </div>
                
                <div>
                    <div className="relative top-10 w-[320px] px-4">
                        <input
                            className="w-full h-8 px-2 border border-gray-300 rounded"
                            type="number"
                            name="amount"
                            placeholder="Montant"
                        />
                    </div>
                    
                    <div>
                        <button
                            className="relative top-14 left-20 text-white bg-blue-600 w-40 h-10 px-3 py-2 font-normal rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Mettre à jour
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AmountDialog