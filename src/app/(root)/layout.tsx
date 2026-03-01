import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh">
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollProgress />
    </div>
  );
}
