/* eslint-disable react/prop-types */
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

const AmountDialog = ({number, showModal, email, onAmountUpdated}) => {
    
    if(!number) number = 0
    const [amount, setAmount] = useState(number)
    
    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = async() => {
        const token = localStorage.getItem("token")
        const data = { 
            amount: parseFloat(amount) || 0 
        }
        
        // Console.log pour déboguer
        console.log("=== DÉBOGAGE ===")
        console.log("Email original:", email)
        console.log("URL correcte (sans v1):", `https://82.25.112.91/api/customers/info/${email}`)
        console.log("Données à envoyer:", data)
        console.log("Token:", token)
        
        try {
            // URL corrigée sans /v1
            const response = await axios.post(
                `https://82.25.112.91/api/customers/info/${email}`,
                data,
                {
                    headers: {
                        "Content-Type": 'application/json',
                        Authorization: token // Sans "Bearer"
                    }
                }
            )
            
            if(response.status === 200) {
                toast.success(`Le compte de ${response.data.firstname} ${response.data.lastname} a un montant de ${response.data.amount} XAF`)
                
                // 👈 Fermer le modal et rafraîchir les données
                showModal()
                if (onAmountUpdated) {
                    onAmountUpdated() // Rafraîchit la liste
                }
            } else {
                toast.error("Un incident s'est produit !")
            }
            
        } catch(err) {
            console.error('Erreur détaillée:', err.response?.data || err.message)
            toast.error(err.response?.data?.message || "Une erreur s'est produite lors de la mise à jour")
        }
    }

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
                            value={amount}
                            onChange={handleChange}
                            placeholder="Montant"
                        />
                    </div>
                    
                    <div>
                        <button
                            className="relative top-14 left-20 text-white bg-blue-600 w-40 h-10 px-3 py-2 font-normal rounded-md hover:bg-blue-700 transition-colors"
                            onClick={handleSubmit}
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