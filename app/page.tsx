import Crm from './Home/CRM/Crm';
import ServiceForm from './Components/ServiceForm/ServiceForm';
import IntakeSection from './Home/intakeSection/IntakeSection';
import { ArticleSection } from './Home/ArticleSection/ArticleSection';
import Hero from './Home/hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Crm />
      <IntakeSection />
      <ArticleSection />
      <ServiceForm />
    </>
  );
}
