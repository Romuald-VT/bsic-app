import { useState } from "react";
import { createPortal } from "react-dom";
import { FaUser } from "react-icons/fa6";
import ClientForm from "../Modals/ClientFormModal";

const AddCustomerPanel:React.FC<{onCustomerAdded:()=>void}> = ({ onCustomerAdded }) => {
  // Accepter la prop ici
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCustomerAdded = () => {
    // Cette fonction sera appelée par ClientForm après un ajout réussi
    // et déclenchera la fonction fetchData du Dashboard
    if (onCustomerAdded) {
      onCustomerAdded();
    }
  };

  return (
    <>
           {" "}
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="w-full sm:w-[170px] h-[35px] bg-blue-600 text-white flex flex-row gap-4 items-center justify-center sm:relative sm:left-10 sm:-top-4 p-2 rounded-lg"
      >
                <FaUser />       {" "}
        <span className="text-sm">Nouveau Client</span>     {" "}
      </button>
           {" "}
      {showModal &&
        createPortal(
          <ClientForm
            setModal={closeModal}
            onCustomerAdded={handleCustomerAdded} // Passer la prop ici
          />,
          document.body
        )}
         {" "}
    </>
  );
};

export default AddCustomerPanel;
