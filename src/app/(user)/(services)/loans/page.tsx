import LoanUiOne from "@/ui/LoanUi/LoanUiOne";
import LoanApplicationForm from "@/ui/LoanUi/LoanUIFive";
import WhyChooseLoans from "@/ui/LoanUi/LoanUIFour";
import LoanSection from "@/ui/LoanUi/LoanUITwo";
import LoanUiThree from "@/ui/LoanUi/LoanUIThree";

const LoanPage = ()=>{

    return(
        <div className="flex-grow">
            <LoanUiOne/>
            <LoanSection/>
            <LoanUiThree/>
            <WhyChooseLoans/>
            <LoanApplicationForm/>
        </div>
    )
}
export default LoanPage