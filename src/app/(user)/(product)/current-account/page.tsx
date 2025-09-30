import CurrentAccountUiOne from "../../../../ui/CurrentAccountUi/CurrentAccountUiOne"
import CurrentAccountUiTwo from "../../../../ui/CurrentAccountUi/CurrentAccountUiTwo"
import CurrentAccountUiThree from "../../../../ui/CurrentAccountUi/CurrentAccountUiThree"


const CurrentAccountPage = ()=>{

    return(
        <>
            <CurrentAccountUiOne/>
          <main className="container mx-auto px-4 py-8">
            <CurrentAccountUiTwo/>
            <CurrentAccountUiThree/>
          </main>
        </>
    )
}

export default CurrentAccountPage