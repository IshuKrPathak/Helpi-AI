import Image from "next/image";
import logo1 from "../public/LOGO.png";

const Loader = () => {
  return (
    <div className=" h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-20 h-20 relative animate-spin">
        <Image alt="logo" fill src={logo1} />
      </div>
      <p className=" text-sm text-muted-foreground ">
        Helpi is working on your task...
      </p>
    </div>
  );
};

export default Loader;
