'use cient'
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AccountType from "../AdminUI/AccountBtn";
import { useFormState } from "react-dom";
import { nullable } from "zod";
import { handleCustomerForm } from "@/lib/service/customerService";

interface ClientFormProps {
    setModal:()=>void;
    onCustomerAdded:()=>void;
}

const ClientForm:React.FC<ClientFormProps> = ({ setModal, onCustomerAdded }) => {
  const [accountType,setAccountType] = useState('')
  const [job,setJob] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [accountNumber,setAccountNumber] = useState('')
  const [amount,setAmount] = useState(0)

  const [state, formAction,isPending] = useActionState(handleCustomerForm,null)

  const handleReset = ()=>{
     setFirstname('')
     setLastname('')
     setEmail('')
     setPhone('')
     setAccountNumber('')
     setAmount(0)
     setJob('')
     setAccountType('')
  }

  useEffect(() => {
     if(state && state.success) {
       toast.success('Client ajouté avec succès !');
       onCustomerAdded();
       setModal();
     }
     if(state && state.error)
     {
        toast.error(`Erreur lors de l'ajout du client : ${state.error}`);
     }
  })

  return (
    <>
      <div onClick={setModal} className="fixed inset-0 bg-slate-700/40 "></div>
      <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] min-h-[460px] rounded shadow-lg flex flex-col">
        <div className="w-full h-10 bg-blue-700 flex items-center justify-between px-3">
          <span className="text-white font-medium">Nouveau Client</span>
          <button
            className="w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm rounded"
            onClick={setModal}
          >
            x
          </button>
        </div>
        <form
          action={formAction}
          className="p-4 flex flex-col gap-3 flex-grow"
        >
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            placeholder="Prénom"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
             value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            placeholder="Nom"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            placeholder="Téléphone (ex: 6XXXXXXXX)"
            maxLength={15}
            required
            className="w-full h-9 px-2 border rounded"
          />
          <select
            className="w-full h-9 border rounded"
            onChange={(e)=>{setJob(e.target.value)}}
            required
          >
            <option value="">Sélectionner une activité professionnelle</option>
            <option value="Salarie(e)">Salarié(e)</option>
            <option value="Independant">Indépendant</option>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Etudiant">Étudiant</option>
          </select>
          <input type='hidden' name="job" value={job}/>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={accountNumber}
            onChange={e=>setAccountNumber(e.target.value)}
            placeholder="Numéro de compte (16 chiffres)"
            required
            minLength={16}
            maxLength={16}
            className="w-full h-9 px-2 border rounded"
          />

          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={e=>setAmount(Number(e.target.value))}
            placeholder="Montant"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <select
            className="w-full h-9 border rounded"
            required
            onChange={(e)=>{setAccountType(e.target.value)} }
          >
            <option value="">Sélectionner un type de compte</option>
            <option value="Compte Epargne">Compte Epargne</option>
            <option value="Compte Courant">Compte Courant</option>
            <option value="Compte OffShore">Compte OffShore</option>
          </select>
          <input type='hidden' name="accountType" value={accountType}/>
          <div className="flex justify-between mt-3">
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              type="submit"
            >
              {isPending ? 'Envoie...':'Envoyer'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400"
            >

              Réinitialiser
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ClientForm;
