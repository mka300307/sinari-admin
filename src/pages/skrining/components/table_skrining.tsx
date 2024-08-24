import { FaEdit, FaPlay, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSkrining from "../data_sources/dummy_data_skrining";
import Pagination from "../../dashboard/components/pagination";

interface SkriningData {
    id: number;
    judulSkrining: string;
    jenisKluster: string;
    totalSoal: number;
    totalNilaiInterpretasi: number;
}

interface TableSkriningProps {
    filterKluster: string;
}

export default function TableSkrining({ filterKluster }: TableSkriningProps) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    const filteredData = filterKluster
        ? dataSkrining.filter((data: SkriningData) => data.jenisKluster === filterKluster)
        : dataSkrining;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handlePlayClick = (id: number) => {
        navigate(`/skrining/play/${id}`);
    };

    return (
        <div className="mt-8">
            <table className="min-w-full bg-white">
                <thead className="border border-gray-200">
                <tr>
                    <th className="py-2 px-4 font-medium bg-[#F9FAFB]">No</th>
                    <th className="py-2 px-4 font-medium bg-[#F9FAFB]">Judul Skrining</th>
                    <th className="py-2 px-4 font-medium bg-[#F9FAFB]">Jenis Kluster</th>
                    <th className="py-2 px-4 font-medium bg-[#F9FAFB]">Total Soal</th>
                    <th className="py-2 px-4 font-medium bg-[#F9FAFB]">Total Nilai Interpretasi</th>
                    <th className="py-2 px-4 font-medium bg-[#F9FAFB]">Action</th>
                </tr>
                </thead>
                <tbody className="text-center text-[#7C7C7C]">
                {currentItems.map((data: SkriningData, index: number) => (
                    <tr key={data.id} className="border-b border-gray-200">
                        <td className="py-2 px-4 border-l border-gray-200">{indexOfFirstItem + index + 1}</td>
                        <td className="py-2 px-4">{data.judulSkrining}</td>
                        <td className="py-2 px-4">{data.jenisKluster}</td>
                        <td className="py-2 px-4">{data.totalSoal}</td>
                        <td className="py-2 px-4">{data.totalNilaiInterpretasi}</td>
                        <td className="py-2 px-4 border-r border-gray-200 text-[#B1E3FF] gap-4 flex justify-center">
                            <FaPlay className="cursor-pointer" onClick={() => handlePlayClick(data.id)} />
                            <FaTrashAlt className="size-5" />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex items-center mt-10 justify-between">
                <span className="text-[12px]">Menampilkan 1 hingga {itemsPerPage} dari {filteredData.length} data</span>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredData.length / itemsPerPage)}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}
