import SavingAccountUiOne from "@/ui/SavingsAccountUI.tsx/SavingsAccountUIOne";
import SavingsFAQ from "@/ui/SavingsAccountUI.tsx/SavingsAccountUIThree";
import SavingsSection from "@/ui/SavingsAccountUI.tsx/SavingsAccountUiTwo";

const SavingsAccountPage = ()=>{

    return (
        <>
          <SavingAccountUiOne/>
          <main className="container mx-auto px-4 py-8">
          <SavingsSection/>
          <SavingsFAQ/>
          </main>
        </>
    )
}

export default SavingsAccountPage