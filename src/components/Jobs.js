import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container">
      <div className="jobs">
        <Job className="rectangle-1" country="Australie" city="Sydney" contractType="CDI" title="Full Time Sales Associate - Sydney Boutique" />
        <Job className="rectangle-2" country="France" city="Pantin" contractType="CDI" title="Agent de Sécurité - Pantin" />
        <Job className="rectangle-3" country="France" city="Paris" contractType="CDD" title="Responsable d'Atelier (H/F)" />
        <Job className="rectangle-4" country="France" city="Paris" contractType="CDD" title="Chef de Projets" />
        <Job className="rectangle-5" country="France" city="Paris" contractType="CDI" title="Développeur React.js" />
        <Job className="rectangle-6" country="Suède" city="Stockholm" contractType="" title="Sales Associate Stockholm" />
        <Job className="rectangle-7" country="Suisse" city="Crans-Montana" contractType="CDI" title="Vendeur/se - Crans Montana" />
        <Job className="rectangle-8" country="USA" city="New York" contractType="CDI" title="CRM & Data Quality Analyst" />
        <Job className="rectangle-9" country="France" city="Pantin" contractType="CDI" title="Infirmier (H/F)" />
      </div>
    </div>
  );
};

export default Jobs;
