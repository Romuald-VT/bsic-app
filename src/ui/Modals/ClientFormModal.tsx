'use cient'
import { useState } from "react";
import { toast } from "react-toastify";

interface ClientFormProps {
    setModal:()=>void;
    onCustomerAdded:()=>void;
}

const ClientForm:React.FC<ClientFormProps> = ({ setModal, onCustomerAdded }) => {
  

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
          className="p-4 flex flex-col gap-3 flex-grow"
        >
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Nom"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Téléphone (ex: 6XXXXXXXX)"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <select
            className="w-full h-9 border rounded"
            required
          >
            <option value="">Sélectionner une activité professionnelle</option>
            <option value="Salarie(e)">Salarié(e)</option>
            <option value="Independant">Indépendant</option>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Etudiant">Étudiant</option>
          </select>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            placeholder="Numéro de compte (10 chiffres)"
            required
            minLength={10}
            maxLength={10}
            className="w-full h-9 px-2 border rounded"
          />

          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Montant"
            required
            className="w-full h-9 px-2 border rounded"
          />
          <select
            className="w-full h-9 border rounded"
            required
          >
            <option value="">Sélectionner un type de compte</option>
            <option value="Compte Epargne">Compte Epargne</option>
            <option value="Compte Courant">Compte Courant</option>
            <option value="Compte OffShore">Compte OffShore</option>
          </select>

          <div className="flex justify-between mt-3">
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              type="submit"
            >
              Envoyer
            </button>
            <button
              type="button"
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
