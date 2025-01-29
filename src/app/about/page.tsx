import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="sticky-title p-4 bg-dope-black text-md md:text-2xl font-bold md:mt-8">
        ABOUT
      </div>
      <div className="flex flex-col-reverse md:flex-col justify-center text-slate-400 h-auto">
        <div className="h-auto p-4">
          I&apos;m a full-stack web application developer with experience in
          developing modern web-based applications. Proficient in HTML, CSS, and
          JavaScript/TypeScript, especially in NextJs and NestJs frameworks.
          Managing and manipulating data using Python is also an additional
          skill. Currently, i&apos;m working as a free-lancer full-stack web
          developer at <span className="text-slate-200">Corenet</span>,
          developing an app for internal attendance.
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
