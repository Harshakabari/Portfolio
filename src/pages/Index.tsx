import DeveloperManifest from "@/components/DeveloperManifest";
import Footer from "@/components/Footer";
import { FreelancePopup } from "@/components/FreelancePopup";

const Index = () => {
  return (
    <main className="relative bg-background antialiased min-h-screen transition-colors duration-500
      [--pattern-color:rgba(0,0,0,0.05)] dark:[--pattern-color:rgba(255,255,255,0.05)]">
      {/* Background Pattern - Diagonal Lines (Right Top to Bottom Left) */}
      <div className="fixed inset-0 pointer-events-none 
        bg-[repeating-linear-gradient(45deg,var(--pattern-color)_0,var(--pattern-color)_1px,transparent_1px,transparent_20px)] 
        [mask-image:radial-gradient(ellipse_120%_200%_at_50%_0%,#000_50%,transparent_100%)]"
      />
      <div className="relative mx-auto h-full w-full max-w-7xl pt-6 md:pt-10 px-4 md:px-0">

        <div className="flex flex-col items-center justify-start py-8 md:py-16">
          <DeveloperManifest />
        </div>

        <Footer />
      </div>

      <FreelancePopup />
    </main>
  );
};

export default Index;
