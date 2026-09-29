import Navbar from "@/components/shared/Navbar";


export default function layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
}
