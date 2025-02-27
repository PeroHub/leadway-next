// import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaSolutions from "@/components/VisaSolutions";
import BannerSection from "@/components/BannerSection";
import EligibilitySection from "@/components/EligibilitySection";
import CoreServicesSection from "@/components/CoreServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import VideoSection from "@/components/VideoSection";
import FAQSection from "@/components/FAQSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="grid">
      {/* <h1>We&apos;ll be back soon!</h1>
      <p>
        Sorry for the inconvenience but we&apos;re performing some maintenance
        at the moment. We&apos;ll be back online shortly!
      </p>
      <p>&mdash; The Team</p> */}
      <WhatsAppButton />
      <BannerSection />
      <VisaSolutions />
      <EligibilitySection />
      <CoreServicesSection />
      <AdvantagesSection />
      <VideoSection />
      <FAQSection />
      <div className="mb-20">
        <LatestNewsSection />
      </div>
      <Footer />
    </div>
  );
}
