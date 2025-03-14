import React, { useState } from "react";

interface PasswordGateProps {
  onAuthenticate: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onAuthenticate }) => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const correctPassword = "cuai2025";

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      onAuthenticate();
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-100 p-6 border-2 border-gray-200 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Members Area
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Enter the password to access the Members page.
        </p>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-400 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
