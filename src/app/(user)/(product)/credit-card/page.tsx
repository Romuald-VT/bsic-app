import CreditCardUIOne from "@/ui/CreditCardUI/CreditCardUIOne";
import CreditCardUiTwo from "@/ui/CreditCardUI/CreditCardUiTwo";
import CreditCardUiThree from "@/ui/CreditCardUI/CreditCardUIThree";

const CreditCardPage = () => {
  return (
    <>
      <CreditCardUIOne />
      <div className="container mx-auto px-4 py-8">
         <CreditCardUiTwo />
         <CreditCardUiThree />
      </div>
      
    </>
  );
}

export default CreditCardPage;