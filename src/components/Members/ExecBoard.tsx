import React from "react";
import MemberList from "./MemberList";

interface ExecMember {
  name: string;
  year: string;
  major: string;
  email: string;
  linkedin: string;
  interests: string;
  role: string;
}

interface ExecBoardProps {
  execs: ExecMember[];
}

const ExecBoard: React.FC<ExecBoardProps> = ({ execs }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-mono font-bold mb-4">[Executive Board]</h2>
      <MemberList members={execs} />
    </div>
  );
};

export default ExecBoard;
