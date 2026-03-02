import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import NextTopLoader from 'nextjs-toploader';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh bg-[#0a0a0c]">
      <NextTopLoader showSpinner={false} />
      <CustomCursor />
      <Header />
      <main className="min-h-dvh">{children}</main>
      <Footer />
      <ScrollProgress />
    </div>
  );
}
