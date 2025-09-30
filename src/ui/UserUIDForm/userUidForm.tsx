"use client"
import { useState, ChangeEvent} from "react";

// Définition des props du composant
interface UserUidFormProps {
  showModal: () => void;
}

const UserUidForm: React.FC<UserUidFormProps> = ({ showModal }) => {
  const [uid, setUid] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUid(e.target.value);
  };


  return (
    <>
      <div
        onClick={showModal}
        className="fixed inset-0 bg-slate-700/40"
      ></div>
      <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-slate-900 w-[340px] h-[180px] flex flex-col">
        <div className="w-full h-9 bg-blue-700">
          <button
            className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 font-bold text-sm"
            onClick={showModal}
          >
            x
          </button>
        </div>
        <form
          className="flex flex-col gap-5 mt-4 ml-2 mr-2"
        >
          <input
            type="text"
            name="uid"
            value={uid}
            onChange={handleChange}
            className="h-10 w-full font-light text-xl"
          />
          <button
            type="submit"
            className="border bg-blue-600 text-white font-medium w-28 h-10 rounded-md flex flex-col gap-3 relative left-[100px]"
          >
            <span className="relative top-2 left-1">Connexion</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default UserUidForm;
