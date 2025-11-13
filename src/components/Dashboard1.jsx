import React from "react";

export default function Dashboard1() {
  const team = {
    name: "FC",
    manager: "RAM",
    points: 405,
    rank: 1916057,
    totalPlayers: 12222111,
    gwPoints: 81,
  };

  const goalkeepers = [
    { name: "Pope", club: "Newcastle", pts: 41, form: 5.0, fixture: "BHA (A)" },
  ];

  const defenders = [
    { name: "J.Timber", club: "Arsenal", pts: 48, form: 4.7, fixture: "FUL (A)" },
    { name: "MuFoz", club: "Crystal Palace", pts: 36, form: 4.0, fixture: "BOU (H)" },
    { name: "Van de Ven", club: "Spurs", pts: 32, form: 2.8, fixture: "AVL (A)" },
  ];

  const midfielders = [
    { name: "Enzo", club: "Chelsea", pts: 41, form: 4.0, fixture: "NFO (A)" },
    { name: "Semenyo", club: "Bournemouth", pts: 66, form: 10.0, fixture: "CRY (A)" },
    { name: "Gakpo", club: "Liverpool", pts: 33, form: 3.3, fixture: "MUN (H)" },
    { name: "Kudus", club: "West Ham", pts: 39, form: 7.2, fixture: "AVL (A)" },
    { name: "Foden", club: "Man City", pts: 20, form: 3.1, fixture: "EVE (A)" },
  ];

  const forwards = [
    { name: "Haaland", club: "Man City", pts: 70, form: 11.0, fixture: "EVE (A)" },
    { name: "Bowen", club: "West Ham", pts: 35, form: 6.7, fixture: "BRI (A)" },
  ];

  const substitutes = [
    { name: "Raya", club: "Arsenal", pts: 34, form: 3.3, fixture: "FUL (A)" },
    { name: "Alex Moreno", club: "Aston Villa", pts: 0, form: 0.0, fixture: "TOT (A)" },
    { name: "Beto", club: "Everton", pts: 0, form: 0.0, fixture: "MCI (A)" },
    { name: "Aina", club: "Nottingham Forest", pts: 6, form: 0.7, fixture: "CHE (H)" },
  ];

  const renderPlayers = (players) =>
    players.map((p, i) => (
      <div key={i} className="flex justify-between text-gray-200 border-b border-gray-700 py-2">
        <span>{p.name}</span>
        <span className="text-sm text-gray-400">{p.club}</span>
        <span>{p.form}</span>
        <span>{p.pts}</span>
        <span>{p.fixture}</span>
      </div>
    ));

  return (
    <div className="min-h-screen bg-[#1a0028] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full bg-[#2a0047] p-6 border-r border-purple-900">
        <h1 className="text-2xl font-bold mb-1">{team.name}</h1>
        <p className="text-sm text-gray-400 mb-6">{team.manager}</p>

        <div className="bg-[#3d006b] rounded-xl p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Points & Rankings</h2>
          <p className="text-sm">Overall Points: {team.points}</p>
          <p className="text-sm">Overall Rank: {team.rank.toLocaleString()}</p>
          <p className="text-sm">Total Players: {team.totalPlayers.toLocaleString()}</p>
          <p className="text-sm text-purple-300">Gameweek Points: {team.gwPoints}</p>
        </div>

        <div className="bg-[#3d006b] rounded-xl p-4 mb-6 text-center">
          <h2 className="text-md font-semibold mb-2">My Team Badge</h2>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm">
            Generate Team Badge
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-sm text-gray-300 mb-2">My Leagues</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🏆 RETRO FCW (retroiksenepal)</li>
            <li>⚽ GadgetByte League</li>
            <li>💎 RONIN Fantasy</li>
            <li>🧠 Oli Bois FPL</li>
            <li>🔥 Jay Nepal FPL League</li>
          </ul>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-bold">Pick Team</h2>
          <p className="text-sm text-gray-400">
            Gameweek 8 • Deadline: <span className="text-purple-400">Sat 18 Oct, 15:45</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {["Bench Boost", "Triple Captain", "Wildcard", "Free Hit"].map((btn, i) => (
            <button
              key={i}
              className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full text-sm"
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="text-center text-gray-400 mb-4 text-sm">
          To change your captain, use the menu which appears when clicking on a player.
        </div>

        <div className="bg-[#2a0047] rounded-xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold text-purple-300 mb-3">Goalkeepers</h3>
          {renderPlayers(goalkeepers)}

          <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-3">Defenders</h3>
          {renderPlayers(defenders)}

          <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-3">Midfielders</h3>
          {renderPlayers(midfielders)}

          <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-3">Forwards</h3>
          {renderPlayers(forwards)}

          <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-3">Substitutes</h3>
          {renderPlayers(substitutes)}
        </div>
      </main>
    </div>
  );
}
