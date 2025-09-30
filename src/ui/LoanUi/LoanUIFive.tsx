
const LoanApplicationForm = () => {
  
  return (
    <>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="mb-8">
          Demandez un prêt dès aujourd&apos;hui et faites le premier pas vers la réalisation de vos objectifs financiers.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Commencer
          </a>
        </div>
      </section>
    </>
  );
};

export default LoanApplicationForm;
