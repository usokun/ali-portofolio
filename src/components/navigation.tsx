"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navigation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const myGitHub = () => {
    window.open(`https://github.com/usokun`);
  };

  const myInstagram = () => {
    window.open(`https://www.instagram.com/hii_ali/`);
  };

  const myLinkedIn = () => {
    window.open(`https://www.linkedin.com/in/ali-h-43b058104/`);
  };

  const sendMeMail = () => {
    window.open(`mailto:${process.env.NEXT_PUBLIC_MAIL_ADDRESS}`);
  };

  const contactMyWhatsapp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WA_NUMBER}`
    );
  };

  return (
    <>
      <main className="flex flex-col md:flex-row w-full justify-center text-slate-200 font-[family-name:var(--font-geist-sans)]">
        {/* navigation */}
        <div className="flex w-full md:w-[30%] min-h-[100px]">
          <div className="flex md:fixed h-auto md:h-svh w-full md:w-[30%] p-4">
            <main className="flex flex-col w-full h-auto p-2 justify-between my-8">
              <div className="flex w-full flex-col justify-center self-center gap-y-2">
                <div className="font-semibold text-4xl self-start">
                  Ali Hidayat
                </div>
                <div className="font-medium text-slate-200 xs:text-lg md:text-xl self-start">
                  Full-Stack Web Developer
                </div>
                <div className=" mt-2 xs:text-lg md:text-xl font-normal text-slate-400">
                  a full-stack web developer with a passion for building
                  scalable and efficient web applications.
                </div>
                <div className="hidden md:block w-full flex-col justify-center self-center mt-10 ">
                  <div className="flex flex-col gap-x-2 gap-y-3">
                    {/* ABOUT Link */}
                    <div className="flex gap-x-2 w-auto list-menu">
                      <span
                        className={cn(
                          "flex self-center span-bar h-1 bg-slate-600",
                          {
                            "!w-[100px] h-2 bg-slate-300":
                              pathname === "/" || pathname === "/about",
                            "w-[50px]": pathname !== "/",
                          }
                        )}
                      />
                      <Link href="/about">
                        <span
                          className={cn(
                            "flex self-center font-medium text-slate-400 cursor-pointer",
                            {
                              "text-slate-200 font-semibold":
                                pathname === "/about" || pathname === "/",
                            }
                          )}
                        >
                          ABOUT
                        </span>
                      </Link>
                    </div>

                    {/* EXPERIENCE Link */}
                    <div className="flex gap-x-2 w-auto list-menu">
                      <span
                        className={cn(
                          "flex self-center span-bar h-1 bg-slate-600 w-[75px]",
                          {
                            "!w-[100px] h-2 bg-slate-300":
                              pathname === "/experience",
                            "w-[50px]": pathname !== "/experience",
                          }
                        )}
                      />
                      <Link href="/experience">
                        <span
                          className={cn(
                            "flex self-center font-medium text-gray-400 cursor-pointer",
                            {
                              "text-slate-200 font-semibold":
                                pathname === "/experience",
                            }
                          )}
                        >
                          EXPERIENCE
                        </span>
                      </Link>
                    </div>

                    {/* PROJECTS Link */}
                    <div className="flex gap-x-2 w-auto list-menu">
                      <span
                        className={cn(
                          "flex self-center span-bar h-1 bg-slate-600 w-[75px]",
                          {
                            "!w-[100px] h-2 bg-slate-300":
                              pathname === "/projects",
                            "w-[50px]": pathname !== "/projects",
                          }
                        )}
                      />
                      <Link href="/projects">
                        <span
                          className={cn(
                            "flex self-center font-medium text-gray-400 cursor-pointer",
                            {
                              "text-slate-200 font-semibold":
                                pathname === "/projects",
                            }
                          )}
                        >
                          PROJECTS
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex mt-4 w-full h-auto gap-x-4">
                <span className="">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="hover:border-[#BA0000]"
                          onClick={myGitHub}
                        >
                          <Github />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="p-2 bg-slate-200 rounded-xl">
                          Github
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>

                <span className="">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={myLinkedIn}
                        >
                          <Linkedin />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="p-2 bg-slate-200 rounded-xl">
                          LinkedIn
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>

                <span className="">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={myInstagram}
                        >
                          <FaInstagram />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="p-2 bg-slate-200 rounded-xl">
                          Instagram
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>

                <span className="">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={sendMeMail}
                        >
                          <MdAttachEmail />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="p-2 bg-slate-200 rounded-xl">
                          Send Me Email
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>

                <span className="">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={contactMyWhatsapp}
                        >
                          <FaWhatsapp />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="p-2 bg-slate-200 rounded-xl">
                          Contact My WhatsApp
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
              </div>
            </main>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col h-auto w-full md:w-[50%] ">
          <div className="h-auto p-2 ">{children}</div>
        </div>
      </main>
    </>
  );
}
