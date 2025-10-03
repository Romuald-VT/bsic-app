// src/components/CustomersTable.jsx
import DollarButton from "../MiscellaneousUI/DollarBtn";
import AccountType from "../AdminUI/AccountBtn";
import EmailButton from "../MiscellaneousUI/EmailBtn";
import DeleteButton from "../MiscellaneousUI/DeletionPanel";
import { Customer } from "@/lib/asset/definitions.js";

// Ajoutez onCustomerDeleted aux props que CustomersTable reçoit
interface CustomerTableProps{
    records:Array<Customer>;
    onCustomerDeleted:()=>void;
}

const CustomersTable:React.FC<CustomerTableProps> = ({ records, onCustomerDeleted }) => (
  <div className="overflow-x-auto">
    <table className="w-full table-auto border-collapse">
      <thead className="bg-blue-600 text-white text-sm md:text-base">
        <tr>
          <th className="px-4 py-2">Prénom</th>
          <th className="px-4 py-2">Nom</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Téléphone</th>
          <th className="px-4 py-2">Activité</th>
          <th className="px-4 py-2">N° Compte</th>
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Montant</th>
          <th className="px-4 py-2">UUID</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {records.map((item, i) => (
          <tr key={i} className="border-b text-sm md:text-base">
            <td className="px-4 py-2">{item.firstname}</td>
            <td className="px-4 py-2">{item.lastname}</td>
            <td className="px-4 py-2">{item.email}</td>
            <td className="px-4 py-2">{item.phoneNumber}</td>
            <td className="px-4 py-2">{item.job}</td>
            <td className="px-4 py-2">{item.accountNumber}</td>
            <td className="px-4 py-2">{item.accountType}</td>
            <td className="px-4 py-2">{item.amount} XAF</td>
            <td className="px-4 py-2">{item.customerID}</td>
            <td className="px-4 py-2">
              <div className="flex flex-wrap gap-2">
                {/* 👈 Toutes les actions reçoivent la fonction de mise à jour */}
                <DollarButton 
                  amount={item.amount} 
                  email={item.email} 
                  onAmountUpdated={onCustomerDeleted} 
                />
                <AccountType 
                  email={item.email} 
                  onAccountUpdated={onCustomerDeleted} 
                />
                <EmailButton 
                  userData={item} 
                  onEmailUpdated={onCustomerDeleted} 
                />
                <DeleteButton 
                  item={item} 
                  onCustomerDeleted={onCustomerDeleted} 
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CustomersTable;