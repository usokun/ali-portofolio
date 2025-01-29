import React from "react";
import Image from "next/image";

export default function ProjectsImages() {
  return (
    <>
      <div className="w-[144px] h-[72px] bg-slate-500">DEFAULT IMAGE</div>
    </>
  );
}

function BestpathImage() {
  return (
    <Image
      src="/project-imgs/bestpath-network.png"
      width={144 * 2}
      height={72 * 2}
      alt="best-path network"
    />
  );
}

function CorenetLeaveonImage() {
  return (
    <Image
      src="/project-imgs/corenet-leaveon.png"
      width={144 * 2}
      height={72 * 2}
      alt="corenet leaveon"
    />
  );
}

function FarmbotDashboardImage() {
  return (
    <Image
      src="/project-imgs/farmbot-dashboard.png"
      width={144 * 2}
      height={72 * 2}
      alt="farmbot dashboard"
    />
  );
}

function LunaCakeImage() {
  return (
    <Image
      src="/project-imgs/luna-cake.png"
      width={144 * 2}
      height={72 * 2}
      alt="Luna cake"
    />
  );
}
export {
  BestpathImage,
  CorenetLeaveonImage,
  FarmbotDashboardImage,
  LunaCakeImage,
};
