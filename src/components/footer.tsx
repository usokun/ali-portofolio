"use client";
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const sendMeMail = () => {
  window.open(`mailto:${process.env.NEXT_PUBLIC_MAIL_ADDRESS}`);
};

const contactMyWhatsapp = () => {
  window.open(
    `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WA_NUMBER}`
  );
};

export default function Footer() {
  return (
    <>
      <div className="p-1 text-slate-400">contact me via</div>
      <div className="flex gap-x-2 self-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={sendMeMail}>
                <MdAttachEmail />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span className="p-2 bg-slate-200 rounded-xl">Send Me Email</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/*  */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={contactMyWhatsapp}>
                <FaWhatsapp />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span className="p-2 bg-slate-200 rounded-xl">
                Whatsapp Contact
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
