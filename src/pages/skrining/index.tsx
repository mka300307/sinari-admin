import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import TableSkrining from "./components/table_skrining";

export default function SkriningPage() {
    const [filterKluster, setFilterKluster] = useState<string>("");

    const handleFilterClick = (jenisKluster: string) => {
        setFilterKluster(jenisKluster);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="h-full w-full p-6">
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <h1 className="text-3xl font-bold">Dashboard</h1>
                                <div className="flex text-xl text-[#AAAAAA] gap-2">
                                    <h1>Skrining</h1>
                                    <h1>/</h1>
                                    <h1>List Skrining</h1>
                                </div>
                            </div>
                            <a className="bg-[#B1E3FF] text-white px-4 py-2 rounded-lg hover:bg-[#67C6FB] focus:outline-none"
                               href="/skrining/add">
                                + Tambahkan Skrining
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 w-full bg-white px-8 py-12 rounded-lg">
                        <div className="flex justify-between">
                            <div className="flex gap-3 items-center justify-center">
                                <h1
                                    className={`cursor-pointer ${filterKluster === "" ? "text-black text-2xl font-bold" : " text-xl text-[#AAAAAA] font-semibold"}`}
                                    onClick={() => handleFilterClick("")}
                                >
                                    All Skrining
                                </h1>
                                <h1
                                    className={`cursor-pointer ${filterKluster === "Kesehatan" ? "text-black text-2xl font-bold" : " text-xl text-[#AAAAAA] font-semibold"}`}
                                    onClick={() => handleFilterClick("Kesehatan")}
                                >
                                    Kesehatan
                                </h1>
                                <h1
                                    className={`cursor-pointer ${filterKluster === "Nutrisi" ? "text-black text-2xl font-bold" : " text-xl text-[#AAAAAA] font-semibold"}`}
                                    onClick={() => handleFilterClick("Nutrisi")}
                                >
                                    Nutrisi
                                </h1>
                                <h1
                                    className={`  cursor-pointer ${filterKluster === "Kesehatan Mental" ? "text-black text-2xl font-bold" : " text-xl text-[#AAAAAA] font-semibold"}`}
                                    onClick={() => handleFilterClick("Kesehatan Mental")}
                                >
                                    Mental
                                </h1>
                                <h1
                                    className={` cursor-pointer ${filterKluster === "Olahraga" ? "text-black text-2xl font-bold" : " text-xl text-[#AAAAAA] font-semibold"}`}
                                    onClick={() => handleFilterClick("Olahraga")}
                                >
                                    Olahraga
                                </h1>
                            </div>
                            <div className="flex gap-3 items-center ">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-2 py-1 w-60 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#67C6FB] focus:border-transparent"
                                />
                                <div>
                                    <a className="bg-[#B1E3FF] text-white px-4 py-2 rounded-lg hover:bg-[#67C6FB] focus:outline-none"
                                       href="#"
                                    >
                                        Cari
                                    </a>
                                </div>
                            </div>
                        </div>
                        <TableSkrining filterKluster={filterKluster} />
                    </div>
                </div>
            </div>
        </div>
    );
}
