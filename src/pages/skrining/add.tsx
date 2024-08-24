import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";

export default function TambahSkrining() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="flex flex-col justify-center p-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-5">
                            <h1 className="text-3xl font-bold">Dashboard</h1>
                            <div className="flex text-xl text-[#AAAAAA] gap-2">
                                <h1><a href="/pasien">Pasien</a></h1>
                                <h1>/</h1>
                                <h1>Tambahkan Pasien</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[950px] p-5 bg-white mt-9">
                            <div className="w-full ">
                                <input type="email" placeholder="Masukan alamat email pasien" className="mt-1 block h-full w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            <div className="w-full ">
                                <input type="date" placeholder="Masukan tanggal lahir pasien" className="mt-1 block w-full h-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
