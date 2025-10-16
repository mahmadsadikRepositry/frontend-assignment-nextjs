import Hero from "./Components/hero/Hero";
import Crm from "./Components/Crm/Crm";
import { ArticleSection } from "./Components/ArticleSection/ArticleSection";
import ServiceForm from "./Components/ServiceForm/ServiceForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Crm />
      <ArticleSection />
      <ServiceForm />
    </>
  );
}
