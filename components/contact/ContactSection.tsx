import { ContactOption } from "@/props";

// icons
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCallBold } from "react-icons/pi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Social = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-5">
      <ContactOption
        Icon={HiOutlineMail}
        title="Email"
        detail="shilpadadhich52@gmail.com"
        link="mailto:shilpadadhich52@gmail.com"
      />

      <ContactOption
        Icon={PiPhoneCallBold}
        title="Phone"
        detail="+91 8769110126"
        link="tel:+918769110126"
      />

      
    </section>
  );
};

export default Social;
