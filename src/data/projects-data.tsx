import { ProjectsData } from "../types";
import {
  BestpathImage,
  CorenetLeaveonImage,
  FarmbotDashboardImage,
  LunaCakeImage,
} from "@/components/images/projects-images";

export const projectsData: ProjectsData[] = [
  {
    id: 1,
    title: "CoreNet LeaveOn",
    description:
      "A web-based application that allows users to schedule and manage their leave requests.",
    thumbnail: <CorenetLeaveonImage />,
    link: "https://leaveon.core.net.id/login",
  },
  {
    id: 2,
    title: "Luna Cake",
    description:
      "An e-Catalog web-based application that allows users to browse through products such cakes and many more.",
    thumbnail: <LunaCakeImage />,
    link: "",
  },
  {
    id: 3,
    title: "Farmbot Dashboard",
    description:
      "A dashboard web-based application that allows users to monitor IoT sensor system data on real-time.",
    thumbnail: <FarmbotDashboardImage />,
    link: "",
  },
  {
    id: 4,
    title: "Landing Page Best-Path Network",
    description:
      "A landing page website for Best-Path Network to showcase their services and brand.",
    thumbnail: <BestpathImage />,
    link: "https://www.bestpath-network.com/",
  },
];
