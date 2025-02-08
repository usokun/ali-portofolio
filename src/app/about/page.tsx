import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
  return (
    <>
      <div className="sticky-title p-4 bg-dope-black text-md md:text-2xl font-bold md:mt-8">
        ABOUT
      </div>
      <div className="flex flex-col-reverse md:flex-col justify-center text-slate-400 h-auto">
        <div className="h-auto px-4 py-2">
          I&apos;m a full-stack web application developer with experience in
          developing modern web-based applications. Proficient in HTML, CSS, and
          JavaScript/TypeScript, especially in NextJs and NestJs frameworks.
          Currently, i&apos;m working as Frontend web developer at{" "}
          <Link href={"https://www.agapesoftware.co.id/#/home"}>
            <span className="text-slate-200">AGAPE Software</span>
          </Link>
          , developing{" "}
          <span className="italic font-semibold">Premiere Valet</span> for its
          Admin Dashboard.
        </div>
        <div className="h-auto px-4 py-2">
          Previously, I&apos;m working a full-stack web application developer.
          Developing an internal Attendance-related web app at{" "}
          <Link href={"https://core.net.id/"}>
            <span className="text-slate-200">CoreNet</span>
          </Link>
        </div>

        <div className="flex md:hidden self-center justify-center rounded-full bg-red-800 w-[144px] h-[144px] my-2">
          <Image
            src="/pas_photo.png"
            width={144}
            height={144}
            alt=""
            className="flex self-center"
          />
        </div>
      </div>
    </>
  );
}
