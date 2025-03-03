import Footer from "@/components/shared/Footer";
import Naver from "@/components/shared/Naver";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Naver />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
