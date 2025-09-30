import MainComponent from "@/ui/DepositsUI/DepoUIFour";
import DepoUiOne from "@/ui/DepositsUI/DepoUIOne";
import DepositBenefits from "@/ui/DepositsUI/DepoUIThree";
import DepositOptions from "@/ui/DepositsUI/DepoUITwo";

const DepositPage = ()=>{

    return(
        <div className="flex-row">
            <DepoUiOne/>
            <DepositOptions/>
            <DepositBenefits/>
            <MainComponent/>
        </div>
    )
}

export default DepositPage;