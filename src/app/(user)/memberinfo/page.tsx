'use client'


import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import serverStore from '@/lib/utils/serverStore';
import { deleteProfileSession, getProfileSession, ProfileSessionData } from '@/lib/auth';
import { Customer, CustomerDTO } from '@/lib/asset/definitions';
import { getCustomerByUUID } from '@/lib/repository/customerRepository';
import { handleGetCustomerByID } from '@/lib/service/customerService';


const UserProfile = () => {
    const [userData, setUserData] = useState<CustomerDTO>();
    const [loading, setLoading] = useState(true); // 👈 État de chargement
    const [error, setError] = useState(null); // 👈 État d'erreur


    const handleLogout = () => {
        // Supprimer les cookies de session côté client
        deleteProfileSession()
        redirect('/memberlogin')
    }

      
    useEffect(() => {
        const getUserData = async () => {
            const uuid = await getProfileSession()
            const uuidString = uuid?.customerID || '--- IGNORE ---';
            if(!uuid?.customerID)
            {
                toast.error("Aucune donnée utilisateur trouvée. Veuillez vous reconnecter.");
            }
            try {
                
                const response = await handleGetCustomerByID(uuidString);
                const customer:CustomerDTO = {
                    firstname: response[0].firstname,
                    lastname: response[0].lastname,
                    email: response[0].email,
                    job: response[0].job,
                    phoneNumber: response[0].phoneNumber,
                    accountNumber: response[0].accountNumber,
                    accountType: response[0].accountType,
                    amount: response[0].amount
                }
                setUserData(customer)
                toast.success("Données utilisateur récupérées avec succès.");
            } catch (err) {
                toast.error("Erreur lors de la récupération des données utilisateur.");

            }
        }

        
        getUserData();
    }, []);

    // 👈 Affichage conditionnel selon l'état

    return (
        <div className="max-w-[800px] mx-auto bg-white rounded-[15px] shadow-lg p-[30px]">
            <div className="flex items-center gap-5 mb-[30px]">
                <div className="w-[150px] h-[150px] rounded-full bg-[#e0e0e0] flex items-center justify-center overflow-hidden border-[3px] border-primary">
                    <svg viewBox="0 0 24 24" className="w-[80px] h-[80px] fill-white">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-blue-500">Profil Client</h1>
            </div>
            
            <div className="mb-5">
                Nous vous informons que votre compte auprès de la BSIC Cameroun est en règle. Cependant afin de pouvoir exploiter pleinement
                votre compte il est nécessaire de fournir des justificatifs auprès de la COBAC. Nous vous invitons à vous rapprocher de notre agence
                ou à contacter notre service client pour les informations nécessaires sur les documents à fournir.
                Nous vous remercions pour votre compréhension et restons à votre disposition pour toutes questions.
            </div>

            <div className="mb-5">
                <div className="font-semibold text-blue-500 mb-1">Nom complet</div>
                <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
                    {/* 👈 Protection contre undefined */}
                    {userData?.firstname && userData.lastname
                        ? `${userData.firstname} ${userData.lastname}` 
                        : "Non renseigné"}
                </div>
            </div>

            <div className="mb-5">
                <div className="font-semibold text-blue-500 mb-1">Email</div>
                <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
                    {userData?.email || "Non renseigné"}
                </div>
            </div>

            <div className="mb-5">
                <div className="font-semibold text-blue-500 mb-1">Type de compte</div>
                <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
                    {userData?.accountType || "Non renseigné"}
                </div>
            </div>
            
            <div className="mb-5">
                <div className="font-semibold text-blue-500 mb-1">Numéro de Compte</div>
                <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
                    {userData?.accountNumber || "Non renseigné"}
                </div>
            </div>

            <div className="mt-[30px] pt-[20px] border-t-[2px] border-t-[#f5f6fa]">
                <div className="font-semibold text-blue-500 mb-1">Solde</div>
                <div className="text-base p-[10px] bg-[#f5f6fa] rounded-md mt-1">
                    {userData?.amount ? `${userData?.amount} FCFA` : "Non renseigné"}
                </div>
            </div>
            
            <button 
                className="bg-blue-500 text-white border-none py-3 px-8 rounded-full cursor-pointer w-full text-base mt-8 transition-transform duration-200 hover:shadow-lg hover:scale-105" 
                onClick={handleLogout}
            >
                Déconnexion
            </button>
            
            <ToastContainer />
        </div>
    );
}

export default UserProfile;