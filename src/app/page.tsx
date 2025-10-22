import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Features } from "@/components/ui/features";
import { ContactInfo } from "@/components/ui/contact-info";
import { Footer } from "@/components/ui/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <ContactInfo />
      <Footer />
    </div>
  );
}