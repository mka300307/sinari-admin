import React, { useState } from 'react';
import { FaEdit, FaInfoCircle, FaRegBell, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { DataPasien, dummyData } from "../data_sources/dummy_data_pasien";
import Pagination from "../../dashboard/components/pagination";

const TablePasien: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleDetailClick = (id: number) => {
        navigate(`/pasien/detail/${id}`);
    };

    const handleEditClick = (id: number) => {
        navigate(`/pasien/edit/${id}`);
    };

    return (
        <>
            <div className="mt-6">
                <table className="min-w-full bg-white">
                    <thead className="border border-gray-200 font-medium">
                    <tr>
                        <th className="py-2 px-4">No</th>
                        <th className="py-2 px-4">Nama</th>
                        <th className="py-2 px-4">Alamat Email</th>
                        <th className="py-2 px-4">Kluster</th>
                        <th className="py-2 px-4">Status Skrining</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                    </thead>
                    <tbody className="text-center text-[#7C7C7C]">
                    {currentItems.map((data: DataPasien, index: number) => (
                        <tr key={data.id}>
                            <td className="py-2 px-4">{indexOfFirstItem + index + 1}</td>
                            <td className="py-2 px-4">{data.nama}</td>
                            <td className="py-2 px-4">{data.email}</td>
                            <td className="py-2 px-4">{data.kluster}</td>
                            <td className="py-2 px-4">{data.status}</td>
                            <td className="py-2 px-4 text-[#B1E3FF] gap-4 flex justify-center">
                                <a href="#" onClick={() => handleDetailClick(data.id)}>
                                    <FaInfoCircle className="size-5" />
                                </a>
                                <a href="#" onClick={() => handleEditClick(data.id)}>
                                    <FaEdit className="size-5" />
                                </a>
                                <FaRegBell className="size-5" />
                                <FaTrashAlt className="size-5" />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center mt-10 justify-between">
                <span className="text-[12px]">Menampilkan {indexOfFirstItem + 1} hingga {Math.min(indexOfLastItem, dummyData.length)} dari {dummyData.length} data</span>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(dummyData.length / itemsPerPage)}
                    paginate={paginate}
                />
            </div>
        </>
    );
}

export default TablePasien;
