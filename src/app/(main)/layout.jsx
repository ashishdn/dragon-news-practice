import Header from "@/components/shared/Header";
import LatestNews from "@/components/shared/LatestNews";
import Navbar from "@/components/shared/Navbar";


export default function layout({ children }) {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
}
