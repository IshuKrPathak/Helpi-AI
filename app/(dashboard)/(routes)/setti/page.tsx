import { Heading } from "@/components/heading";
import { Settings } from "lucide-react";

const SettingPage = async () => {
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account setting"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className=" px-4 lg:px-8 space-y-4">
        <div className=" text-muted-foreground  text-sm">
            settings
         </div>
      </div>
    </div>
  );
};

export default SettingPage