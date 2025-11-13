import React from "react";
import { Link } from "react-router-dom";
import { Video } from "lucide-react";

const matches = [
  { id: 404, home: "SFFA U17 - MLS Next", score: "4 : 1", away: "Tampa Bay United", date: "2025-04-06 12:00:00" },
  { id: 384, home: "SFFA U15 - MLS Next", score: "2 : 1", away: "Athletum FC Academy U15", date: "2025-03-17 12:00:00" },
  { id: 374, home: "Hapoel Nir Ramat HaSharon", score: "0 : 2", away: "Maccabi Haifa U19", date: "2025-03-08 12:40:00" },
  { id: 379, home: "SFFA U17 - MLS Next", score: "0 : 0", away: "Miami Futball Academy U17", date: "2025-03-08 12:00:00" },
  { id: 362, home: "Hapoel Rishon Lezion U19", score: "1 : 0", away: "Hapoel Petah Tikva U19", date: "2025-03-01 14:50:00" },
  { id: 366, home: "Real Salt Lake U19 - MLS Next", score: "5 : 0", away: "Breakers FC U19", date: "2025-02-22 10:00:00" },
  { id: 343, home: "SFFA U14 - MLS Next", score: "1 : 1", away: "IdeaSport Soccer Academy MLS NEXT U14", date: "2025-02-16 12:00:00" },
  { id: 341, home: "SFFA U16 - MLS Next", score: "3 : 0", away: "Chargers Soccer Club MLS NEXT U16", date: "2025-02-16 10:00:00" },
  { id: 330, home: "Maccabi Haifa U19", score: "3 : 1", away: "Maccabi Netanya U19", date: "2025-02-08 13:50:00" },
  { id: 334, home: "SFFA U16 - MLS Next", score: "3 : 5", away: "Jacksonville Football Club MLS NEXT U16", date: "2025-02-08 12:00:00" },
  { id: 323, home: "Maccabi Netanya U19", score: "3 : 1", away: "Hapoel Nir Ramat HaSharon U19", date: "2025-02-01 13:45:00" },
  { id: 318, home: "SFFA U19 - MLS Next", score: "1 : 7", away: "Orlando City U19", date: "2025-01-27 12:00:00" },
];

export default function Matches() {
  return (
    <div className="flex min-h-screen" style={{ background: "linear-gradient(135deg, #2e003e, #61007f)" }}>
      {/* Sidebar */}
      <aside
        className="w-64 text-white shadow-xl flex flex-col"
        style={{
          background: "linear-gradient(180deg, #4b007d, #2e003e)",
        }}
      >
        <div className="p-6 border-b border-purple-500">
          <p className="text-sm text-purple-200 font-semibold tracking-wider">🏆 JOIN THE CLUB</p>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li className="px-6 py-3 font-semibold bg-purple-600 rounded-l-full">
              ⚽ Matches
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#f3d0ff]">Manage Matches</h2>
        </header>

        {/* Matches grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => {
            const CardContent = (
              <div
                key={match.id}
                className="p-5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-purple-400 bg-[#3b004f] text-white relative"
              >
                <span className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded">
                  #{match.id}
                </span>

                <div className="text-center space-y-2 mt-4">
                  <h3 className="font-semibold text-purple-200">{match.home}</h3>
                  <p className="text-3xl font-extrabold text-[#f3d0ff]">{match.score}</p>
                  <h3 className="font-semibold text-purple-300">{match.away}</h3>
                  <p className="text-sm text-gray-400">{match.date}</p>
                </div>

                <div className="absolute bottom-3 right-3 text-purple-400 opacity-80">
                  <Video size={20} />
                </div>
              </div>
            );

            return match.id === 404 ? (
              <Link to="/dashboard2" key={match.id}>
                {CardContent}
              </Link>
            ) : (
              CardContent
            );
          })}
        </div>
      </main>
    </div>
  );
}
