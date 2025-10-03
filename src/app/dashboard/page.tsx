'use client'
//react-hooks/exhaustive-deps
import { useEffect, useState, useMemo,useCallback } from "react";

// Importation des composants séparés
import DashboardHeader from "@/ui/DashBoardUI/DashboardHeader";
import FiltersBar from "@/ui/DashBoardUI/FilterBarUI";
import CustomersTable from "@/ui/DashBoardUI/CustomerTableUI";
import Pagination from "@/ui/DashBoardUI/Pagination";
import AddCustomerPanel from "@/ui/MiscellaneousUI/AddCustomerPanel";
import { Customer } from "@/lib/asset/definitions";
import { handleGetAllCustomers, handleLogout } from "@/lib/service/customerService";
import { toast } from "react-toastify";

const Dashboard: React.FC = () => {
  const [dataApi, setDataApi] = useState<Customer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);


  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [accountType, setAccountType] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [job, setJob] = useState<string>("");

  // Fonction fetch réutilisable
  
  useEffect(() => {
  const fetchCustomers = async () => {
    try {
      const res = await handleGetAllCustomers();
      console.log(res)
      const customers: Customer[] = res.map((customer) => ({
        firstname: customer.firstname,
        lastname: customer.lastname,
        email: customer.email,
        job: customer.job,
        phoneNumber: customer.phonenumber,
        accountType: customer.accounttype,
        accountNumber: customer.accountnumber,
        amount: customer.amount,
        customerID: customer.customerid,
      }));
      // Utilisez customers ici (par exemple: setDataApi(customers))
      setDataApi(customers)
      toast.success("chargement des donnees effectue !")
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  fetchCustomers();
}, []);

  const filteredData = useMemo((): Customer[] => {
  return dataApi.filter((item) => {
    console.log(item)
    return(
      item.lastname.toLowerCase().includes(lastname.toLocaleLowerCase())&&
      item.email.toLowerCase().includes(email.toLowerCase())&&
      item.phoneNumber.toLowerCase().includes(phone.toLowerCase())&&
      item.accountType.toLowerCase().includes(accountType.toLowerCase())&&
      item.job.toLowerCase().includes(job.toLowerCase())
    )
  });
}, [dataApi, lastname,email,phone,accountType,job]); // ✅ Toutes les dépendances
  

  const itemsPerPage: number = 10;
  const lastIndex: number = itemsPerPage * currentPage;
  const firstIndex: number = (currentPage - 1) * itemsPerPage;
  const records: Customer[] = filteredData.slice(firstIndex, lastIndex);
  const nPages: number = Math.ceil(filteredData.length / itemsPerPage);
  const numbers: number[] = [...Array(nPages + 1).keys()].slice(1);

  const prevPage = (): void => setCurrentPage((p) => Math.max(p - 1, 1));
  const nextPage = (): void => setCurrentPage((p) => Math.min(p + 1, nPages));

  return (
    <div className="p-2 md:p-6">
      <DashboardHeader onLogout={handleLogout} />

      {/* Formulaire ajout client */}
      <div className="my-4">
        <AddCustomerPanel onCustomerAdded={()=>{}} />
      </div>

      {/* Filtres */}
      <FiltersBar lastname={lastname} setLastname={setLastname} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} accountType={accountType} setAccountType={setAccountType} job={""} setJob={setJob}/>

      {/* Gestion loading / erreur / table */}
        <>
          <CustomersTable records={records} onCustomerDeleted={()=>{}} />

          {/* Pagination centrée sous la table */}
          {nPages > 1 && (
            <div className="flex justify-center mt-6">
              <Pagination
                currentPage={currentPage}
                numbers={numbers}
                changePage={setCurrentPage}
                prevPage={prevPage}
                nextPage={nextPage}
              />
            </div>
          )}
        </>
      
    </div>
  );
};

export default Dashboard;