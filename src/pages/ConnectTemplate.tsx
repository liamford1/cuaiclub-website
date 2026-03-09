import React from 'react';
import { Linkedin, Instagram, FileText } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

function ConnectTemplate() {
  return (
    <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold text-center mb-12">[Connect With Us!]</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        <a href="https://www.linkedin.com/company/cuaiclub/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <Linkedin className="h-8 w-8 text-blue-600 mb-3" />
            <span className="text-gray-800 font-semibold">LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/aiclubcu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <Instagram className="h-8 w-8 text-blue-600 mb-3" />
            <span className="text-gray-800 font-semibold">Instagram</span>
        </a>
        <a href="https://aixu.tech/app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <Lightbulb className="h-8 w-8 text-blue-600 mb-3" />
            <span className="text-gray-800 font-semibold">AIxU</span>
        </a>

        </div>
    </div>
    </div>
  );
}
export default ConnectTemplate;