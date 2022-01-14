import BannerSection from "../components/banner-section/BannerSection";
import WhoWeAreSection from "../components/who-we-are-section/WhoWeAreSection";
import StudyCenter from "../components/study-center-section/StudyCenter";
import HowWeDoIt from "../components/how-we-do-it-section/HowWeDoIt";
import WhyItsWorthIt from "../components/why-we-do-it/WhyItsWorthIt";
import LeadershipAcademy from "../components/leadership-academy-section/LeadershipAcademy"
import TonsOfLoveSection from "../components/tons-of-love-section/TonsOfLoveSection"
import SowHopeSection from "../components/sow-hope-section/SowHopeSection";
import CollageSection from "../components/collage-section/CollageSection";
import WhatWeDoSection from "../components/what-we-do-section/WhatWeDoSection";
import PaygateFooter from "../components/PaygateFooter";

export default function Home() {
  return (
    <>
      <BannerSection/>
      <WhoWeAreSection/>
      <WhatWeDoSection/>
      <SowHopeSection/>
      <StudyCenter />
      <LeadershipAcademy/>
      <TonsOfLoveSection/>
      <HowWeDoIt />
      <WhyItsWorthIt />
      <CollageSection/>
      <PaygateFooter />
    </>
  );
}
