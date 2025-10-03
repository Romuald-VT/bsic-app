import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction } from "react";

// src/components/FiltersBar.jsx
interface FilterBarProps{
    lastname:string;
    setLastname:Dispatch<SetStateAction<string>>;
    email:string;
    setEmail:Dispatch<SetStateAction<string>>;
    phone:string;
    setPhone:Dispatch<SetStateAction<string>>;
    accountType:string;
    setAccountType:Dispatch<SetStateAction<string>>;
    job:string;
    setJob:Dispatch<SetStateAction<string>>;
}

const FiltersBar:React.FC<FilterBarProps> = ({ lastname, setLastname, email, setEmail, phone, setPhone, accountType, setAccountType, job, setJob }) => (
  <div className="flex flex-wrap gap-4 p-4">
    <input
      type="text"
      value={lastname}
      onChange={(e:ChangeEvent<HTMLInputElement>)=>{setLastname(e.target.value)}}
      placeholder="Nom"
      className="border p-2 rounded w-full md:w-40"
    />
    <input
      type="text"
      value={email}
      onChange={(e:ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}}
      placeholder="Email"
      className="border p-2 rounded w-full md:w-40"
    />
    <input
      type="text"
      value={phone}
      onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPhone(e.target.value)}}
      placeholder="Téléphone"
      className="border p-2 rounded w-full md:w-40"
    />
    <select
      value={accountType}
      onChange={(e:ChangeEvent<HTMLSelectElement>)=>{setAccountType(e.target.value)}}
      className="border p-2 rounded w-full md:w-56"
    >
      <option value="">Type de compte</option>
      <option value="Compte Epargne">Compte Epargne</option>
      <option value="Compte Courant">Compte Courant</option>
      <option value="Compte OffShore">Compte Offshore</option>
    </select>
    <select
      value={job}
      onChange={(e:ChangeEvent<HTMLSelectElement>)=>{setAccountType(e.target.value)}}
      className="border p-2 rounded w-full md:w-56"
    >
      <option value="">Activité professionnelle</option>
      <option value="Salarie(e)">Salarié(e)</option>
      <option value="Independant">Indépendant</option>
      <option value="Entrepreneur">Entrepreneur</option>
      <option value="Etudiant">Étudiant</option>
    </select>
  </div>
);

export default FiltersBar;