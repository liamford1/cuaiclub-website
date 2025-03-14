// Import JSON data
import aiToolsData from "../json_data/aiTools.json";
import weeklySlidesData from "../json_data/weeklySlides.json";
import execData from "../json_data/exec.json";
import speakersData from "../json_data/guestspeakers.json";
import membersData from "../json_data/members.json";
import featuredData from "../json_data/featured.json";

// Type Definitions
export interface AiTool {
  name: string;
  description: string;
  link: string;
  howItWorks: string;
  purpose: string;
  logo?: string;
}

export interface WeeklySlide {
  week: string;
  date: string;
  link: string;
  takeaways: string[];
}

export interface Speaker {
  name: string;
  company: string;
  linkedin: string;
  email: string;
  industry: string;
}

export interface ExecMember {
  name: string;
  year: string;
  major: string;
  email: string;
  linkedin: string;
  interests: string;
  role: string;
}

export interface Member {
  name: string;
  year: string;
  major: string;
  email: string;
  linkedin: string;
  interests: string;
}

// Data Loader Interface
export interface DataLoader {
  aiTools: AiTool[];
  weeklySlides: WeeklySlide[];
  execs: ExecMember[];
  speakers: Speaker[];
  members: Member[];
  featured: AiTool[];
}

// Function to get all data
export const getData = (): DataLoader => ({
  aiTools: aiToolsData.aiTools as AiTool[],
  weeklySlides: weeklySlidesData.weeklySlides as WeeklySlide[],
  execs: execData.execs as ExecMember[],
  speakers: speakersData.speakers as Speaker[],
  members: membersData.members as Member[],
  featured: featuredData.featured as AiTool[],
});
