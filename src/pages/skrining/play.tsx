import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import dataSkrining from "./data_sources/dummy_data_skrining";
import {FaTrash} from "react-icons/fa";

type Params = {
    id: string;
};

export default function FormPlay() {
    const { id } = useParams<Params>();
    const skriningData = dataSkrining.find(p => p.id === parseInt(id || '', 10));

    if (!skriningData) {
        return <div>Patient not found</div>;
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col items-center">
                <Navbar />
                <div className="w-full h-[650px] overflow-y-auto p-6">
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <h1 className="text-3xl font-bold">Dashboard</h1>
                                <div className="flex text-xl text-[#AAAAAA] gap-2">
                                    <h1>Skrining</h1>
                                    <h1>/</h1>
                                    <h1>Form Skrining</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-9">
                        <div className="flex flex-col justify-center items-center w-full gap-9">
                            <div className="flex flex-col justify-center items-center w-full gap-3">
                                <p className="text-2xl font-bold w-[900px]">{skriningData.judulSkrining}</p>
                                <p className="text-l font-medium w-[900px]">{skriningData.jenisKluster}</p>
                            </div>
                            <div className="w-[900px]">
                                {skriningData.dataSoal.map((soal, index) => (
                                    <div key={index} className="mb-6 w-full p-9 rounded-xl bg-white ">
                                        <p className="text-lg font-semibold mb-2">{soal.judulSoal}</p>
                                        {soal.typeJawaban === "dropdown" && (
                                            <select className="w-full p-2 border rounded">
                                                {soal.opsiJawaban?.map((opsi, i) => (
                                                    <option key={i} value={opsi}>{opsi}</option>
                                                ))}
                                            </select>
                                        )}
                                        {soal.typeJawaban === "radio" && (
                                            <div className="flex flex-col">
                                                {soal.opsiJawaban?.map((opsi, i) => (
                                                    <label key={i} className="mb-1">
                                                        <input type="radio" name={soal.judulSoal} value={opsi} className="mr-2" />
                                                        {opsi}
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                        {soal.typeJawaban === "checkbox" && (
                                            <div className="flex flex-col">
                                                {soal.opsiJawaban?.map((opsi, i) => (
                                                    <label key={i} className="mb-1">
                                                        <input type="checkbox" name={soal.judulSoal} value={opsi} className="mr-2" />
                                                        {opsi}
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                        {soal.typeJawaban === "paragraf" && (
                                            <textarea className="w-full p-2 border rounded" rows={4}></textarea>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 py-5 w-[900px] ">
                    <button className="bg-[#B1E3FF] w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                        Submit
                    </button>
                    <div className="w-[45px] h-[45px] bg-[#D2EDF2] flex items-center justify-center rounded-xl">
                        <FaTrash className="text-[#45B3CB]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
