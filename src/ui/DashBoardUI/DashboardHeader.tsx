// src/components/DashboardHeader.jsx
import Image from "next/image";

const DashboardHeader:React.FC<{onLogout:()=>void}> = ({ onLogout }) => (
  <header className="w-full flex flex-col md:flex-row justify-between items-center p-4 border-b">
    <div className="flex items-center gap-3">
      <Image src="/logo1.png" alt="logo-bsic" width={64} height={64} />
      <h2 className="text-blue-600 font-semibold text-2xl md:text-4xl">
        BSIC-BANK DASHBOARD
      </h2>
    </div>
    <button
      className="mt-4 md:mt-0 border bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition"
      onClick={onLogout}
    >
      Déconnexion
    </button>
  </header>
);

export default DashboardHeader;