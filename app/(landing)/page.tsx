import { Button } from "@/components/ui/button";
import Link from "next/link";

const Landingpage = () => {
  return (
    <div className=" ">
      landing page unprortected
      <div>
        <Link href="/sign-in">
          <Button> login</Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button> Register</Button>
        </Link>
      </div>
    </div>
  );
};
export default Landingpage;
