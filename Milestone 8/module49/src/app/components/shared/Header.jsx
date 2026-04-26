import Image from "next/image";
import logo from "@/app/assets/logo.png"
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center py-8 space-y-2.5">
      <Image src={logo} width={200} height={300} alt="logo" className="mx-auto"/>
      <p>Journalism Without fear or Favour</p>
      <p>Date:{format(new Date(), "EEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;