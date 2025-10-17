import Hero from "./Components/hero/Hero";
import Crm from "./Components/CRM/Crm";
import { ArticleSection } from "./Components/ArticleSection/ArticleSection";
import ServiceForm from "./Components/ServiceForm/ServiceForm";
import IntakeSection from "./Components/intakeSection/IntakeSection"


export default function Home() {
  return (
    <>
      <Hero />
      <Crm />
      <IntakeSection/>
      <ArticleSection />
      <ServiceForm />
    </>
  );
}
