"use client"
import { CustomerDTO } from "@/lib/asset/definitions";
import { handleUpdateCustomerData } from "@/lib/service/customerService";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface EmailModalProps {
    data:CustomerDTO;
    showModal: () => void;
    onEmailUpdated: () => void;
}

const UpdateFormModal:React.FC<EmailModalProps>= ({ data, showModal }) => {
  const [formData, setFormData] = useState({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    phone: data.phoneNumber,
    accountNumber: data.accountNumber,
    amount: data.amount,
  });

  const [job, setJob] = useState(data.job);
  const [accountType, setAccountType] = useState(data.accountType);

  const [state,formAction,isPending]= useActionState(handleUpdateCustomerData,null)


  useEffect(() => {
       if(state?.success)
       {
        toast.success("Mise a jour effectuée avec succès !")
        showModal()
       }
       if(state && !state.success)
       {
        toast.error(state.error || "Erreur lors de la mise a jour !")
       }

  }, [state,showModal]);

  const handleReset = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      accountNumber:Number(''),
      amount: Number(""),
    });
    setJob("");
    setAccountType("");
  };

  

  return (
    <>
      <div onClick={()=>{
              if(!isPending)
              {
                showModal()
              }

            }} className="fixed inset-0 bg-slate-700/40 "></div>

      <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[460px] flex flex-col rounded shadow-lg">
        <div className="w-full h-9 bg-blue-700 flex items-center justify-between px-3">
          <span className="text-white font-medium">
            Modifier les Infos du client
          </span>
          <button
            className="w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm rounded"
            onClick={()=>{
              if(!isPending)
              {
                showModal()
              }

            }}
          >
            x
          </button>
        </div>

        <form
          action={formAction}
          className="relative top-5 left-3 w-[320px] flex flex-col"
        >
          <div>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
              placeholder="Prénom"
              required
              className="w-full h-8 mb-2 px-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
              placeholder="Nom"
              required
              className="w-full h-8 mb-2 px-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Email"
              required
              className="w-full h-8 mb-2 px-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Téléphone (ex: 6XXXXXXXX)"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              maxLength={15}
              pattern="^6[0-9]$"
              title="Le numéro doit contenir 9 chiffres et commencer par 6 (format Cameroun)"
              required
              className="w-full h-8 mb-2 px-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              placeholder="Numéro de compte (10 chiffres)"
              onChange={(e) =>
                setFormData({ ...formData, accountNumber: Number(e.target.value) })
              }
              minLength={10}
              maxLength={10}
              pattern="\d{10}"
              title="Le numéro de compte doit contenir exactement 10 chiffres"
              required
              className="w-full h-8 mb-2 px-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-2">
            <select
              className="w-full h-8 px-2 border border-gray-300 rounded"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
            >
              <option value="">Sélectionner une activité professionnelle</option>
              <option value="Salarie(e)">Salarié(e)</option>
              <option value="Independant">Indépendant</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Etudiant">Étudiant</option>
            </select>
          </div>
          <input type="hidden" name="job" value={job}/>
          <div>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: Number(e.target.value) })
              }
              placeholder="Montant"
              min={1}
              required
              className="w-full h-8 mb-2 px-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-8">
            <select
              className="w-full h-8 px-2 border border-gray-300 rounded"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            >
              <option value="">Sélectionner un type de compte</option>
              <option value="Compte Epargne">Compte Épargne</option>
              <option value="Compte Courant">Compte Courant</option>
              <option value="Compte OffShore">Compte OffShore</option>
            </select>
          </div>
          <input type="hidden" name="accountType" value={accountType}/>

          <div className="flex flex-row gap-[120px] mb-2">
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              type="submit"
            >
              {isPending?'Envoi...':'Envoyer'}
            </button>
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              type="button"
              onClick={handleReset}
            >
              Réinitialiser
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateFormModal;
