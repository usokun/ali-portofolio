import React from "react";

export interface ExperienceData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  startTime: string;
  endTime: string;
  link: string;
}

export interface ProjectsData {
  id: number;
  title: string;
  description: string;
  thumbnail: React.JSX.Element;
  link: string;
}
