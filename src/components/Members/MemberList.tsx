import React from "react";

interface Member {
  name: string;
  year: string;
  major: string;
  email: string;
  linkedin: string;
  interests: string;
}

interface MemberListProps {
  members: Member[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left border">Name</th>
            <th className="px-4 py-2 text-left border">Year</th>
            <th className="px-4 py-2 text-left border">Major</th>
            <th className="px-4 py-2 text-left border">Email</th>
            <th className="px-4 py-2 text-left border">LinkedIn</th>
            <th className="px-4 py-2 text-left border">Interests</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 border">{member.name}</td>
              <td className="px-4 py-2 border">{member.year}</td>
              <td className="px-4 py-2 border">{member.major}</td>
              <td className="px-4 py-2 border">
                <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">
                  {member.email}
                </a>
              </td>
              <td className="px-4 py-2 border">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Profile →
                </a>
              </td>
              <td className="px-4 py-2 border">{member.interests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
