import AboutUIOne from "@/ui/AboutUI/AboutOne"
import AboutUIThree from "@/ui/AboutUI/AboutThree"
import AboutUs from "@/ui/AboutUI/AboutTwo"
const AboutPage = ()=>{

    return(
        <div className="bg-gray-100 font-sans">
            <AboutUIOne/>
            <div className="container mx-auto px-4 py-8">
              <AboutUs/>
            <AboutUIThree/>
            </div>  
        </div>
    )
}

export default AboutPage;