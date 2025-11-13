import React from "react";

export default function App() {
  const leagues = [
    { name: "RETRO FC IV", rank: 379 },
    { name: "Gadgetbyte League", rank: 4113 },
    { name: "RONB Fantasy", rank: 5069 },
    { name: "Oli Bois FPL", rank: 2 },
    { name: "Jay Nepal FPL League", rank: 12 },
    { name: "Chiya Amlobhav FPL", rank: 470 },
  ];

  const general = [
    { name: "Nepal", rank: 7871 },
    { name: "Gameweek 1", rank: 1309620 },
    { name: "Overall", rank: 1916067 },
  ];

  // Updated player photos
  const players = [
    {
      name: "Pope",
      pos: "GK",
      team: "BHA (A)",
      img: "https://wallpapercave.com/wp/wp9275683.jpg",
    },
    {
      name: "J. Timber",
      pos: "DEF",
      team: "FUL (A)",
      img: "https://e0.365dm.com/23/07/2048x1152/skysports-arsenal-jurrien-timber_6218730.jpg?20230714152138",
    },
    {
      name: "Mufaz",
      pos: "DEF",
      team: "BOU (H)",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Antoine_Semenyo_2023.jpg",
    },
    {
      name: "Van de Ven",
      pos: "DEF",
      team: "AVL (H)",
      img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=250&q=80",
    },
    {
      name: "Enzo",
      pos: "MID",
      team: "NFO (A)",
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=250&q=80",
    },
    {
      name: "Semmenyo",
      pos: "MID",
      team: "CRY (A)",
      img: "https://tse2.mm.bing.net/th/id/OIP.3dvJXOKaTUv0OM3t4B89jQHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Gakpo",
      pos: "MID",
      team: "MUN (H)",
      img: "https://tse2.mm.bing.net/th/id/OIP.gZkSOa8cTfhG7E6-CTkPJQAAAA?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Kudus",
      pos: "MID",
      team: "AVL (H)",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=250&q=80",
    },
    {
      name: "Foden",
      pos: "MID",
      team: "EVE (H)",
      img: "https://th.bing.com/th/id/R.fcd92aced43241f2ed5d424b0cd4b7d2?rik=NH4rCIE4Z3oqvg&pid=ImgRaw&r=0",
    },
    {
      name: "Haaland",
      pos: "FWD",
      team: "EVE (H)",
      img: "https://i.guim.co.uk/img/media/16fcc78dc491729ae6b2922fbd7552b461591f3d/0_95_2937_1762/master/2937.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=865b8bfa73dfe4f190ce8c5271cc2f18",
    },
    {
      name: "Bowen",
      pos: "FWD",
      team: "BRE (H)",
      img: "https://tse3.mm.bing.net/th/id/OIP.aVj9j3ryZ3VxKa1az1gpwQHaFF?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  const subs = [
    {
      name: "Raya",
      pos: "GK",
      team: "FUL (A)",
      img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=250&q=80",
    },
    {
      name: "Alex Moreno",
      pos: "DEF",
      team: "TOT (A)",
      img: "https://tse3.mm.bing.net/th/id/OIP.zCghLY3MkCAXnjI_gvB9mgHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Beto",
      pos: "FWD",
      team: "MCI (A)",
      img: "https://tse2.mm.bing.net/th/id/OIP.asv3pheUPsrr3ODutsGEZQHaHa?cb=ucfimg2ucfimg=1&w=940&h=940&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Aina",
      pos: "DEF",
      team: "CHE (H)",
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=250&q=80",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#1e003e] text-white font-sans">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 bg-[#2a005c] p-6 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold">JholaFC</h2>
          <p className="text-sm opacity-70">Sankolpa Pokhrel 🇳🇵</p>
        </div>

        <div className="bg-[#400080] p-4 rounded-xl">
          <h3 className="text-sm font-semibold mb-2">Points & Rankings</h3>
          <p>
            Overall Points: <span className="font-bold">405</span>
          </p>
          <p>
            Overall Rank: <span className="font-bold">1,916,067</span>
          </p>
          <p>
            Total Players: <span className="font-bold">12,221,111</span>
          </p>
          <p>
            Gameweek Points: <span className="font-bold">81</span>
          </p>
        </div>

        <button className="bg-purple-700 hover:bg-purple-600 p-3 rounded-xl font-semibold w-full">
          Generate Team Badge
        </button>

        <div>
          <h3 className="font-semibold text-lg mb-2">My Leagues</h3>
          <ul className="space-y-1">
            {leagues.map((l) => (
              <li key={l.name} className="flex justify-between text-sm text-purple-200">
                {l.name} <span>{l.rank}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">General Leagues</h3>
          <ul className="space-y-1">
            {general.map((l) => (
              <li key={l.name} className="flex justify-between text-sm text-purple-200">
                {l.name} <span>{l.rank}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Middle Section */}
      <main className="flex-1 flex flex-col bg-[#3c007a] p-6">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Pick Team</h2>
          <div className="text-sm text-gray-300">
            Gameweek 8 • Deadline:{" "}
            <span className="text-white font-semibold">Sat 18 Oct, 15:45</span>
          </div>
        </header>

        {/* Top buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Bench Boost", "Triple Captain", "Wildcard", "Free Hit"].map((b) => (
            <button
              key={b}
              className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg text-xs font-semibold"
            >
              {b}
            </button>
          ))}
        </div>

        {/* Pitch */}
        <div className="relative bg-green-700 rounded-2xl p-6 text-center flex flex-col justify-center items-center">
          <h3 className="text-sm bg-[#5e17eb] px-4 py-1 rounded-md font-semibold mb-4">
            Fantasy Pitch
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 w-full">
            {players.map((p, i) => (
              <div
                key={i}
                className="bg-white text-black rounded-xl py-2 px-3 shadow-md flex flex-col items-center"
              >
                <img src={p.img} alt={p.name} className="w-12 h-12 rounded-full mb-1" />
                <p className="text-xs font-bold">{p.name}</p>
                <p className="text-[11px] text-gray-600">{p.team}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Substitutes */}
        <div className="mt-6 bg-[#29005b] p-4 rounded-xl">
          <h4 className="font-semibold mb-3">Substitutes</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {subs.map((s, i) => (
              <div
                key={i}
                className="bg-white text-black rounded-xl py-2 px-3 shadow-md flex flex-col items-center"
              >
                <img src={s.img} alt={s.name} className="w-12 h-12 rounded-full mb-1" />
                <p className="text-xs font-bold">{s.name}</p>
                <p className="text-[11px] text-gray-600">{s.team}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-6 bg-purple-600 hover:bg-purple-500 p-3 rounded-xl w-full font-semibold">
          Save Your Team
        </button>
      </main>

      {/* Fixtures Panel */}
      <aside className="lg:w-72 bg-[#2a005c] p-6">
        <h3 className="text-lg font-bold mb-4">Fixtures</h3>
        <div className="bg-[#400080] p-4 rounded-xl text-sm space-y-2">
          <p className="font-semibold">Gameweek 8</p>
          <p>Sat 18 Oct – Tue 21 Oct</p>
          <p className="opacity-70">Upcoming matches appear here.</p>
        </div>
      </aside>
    </div>
  );
}
