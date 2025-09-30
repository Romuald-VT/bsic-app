"use client"
import ContactUiOne from "@/ui/ContactUI/ContactOne";
import BranchesAndSocial from "@/ui/ContactUI/ContactFive";
import ContactUiTwo from "@/ui/ContactUI/ContactTwo";
import ContactForm from "@/ui/ContactUI/ContactThree";
import ContactUiFour from "@/ui/ContactUI/ContactFour";

const ContactPage = () => {
  return (
    <div>
      <ContactUiOne />
      <div className="container mx-auto px-4 py-8">
        <BranchesAndSocial />
        <ContactUiTwo />
        <ContactForm />
        <ContactUiFour />
      </div>
    </div>
  );
}
export default ContactPage;
