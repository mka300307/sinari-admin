import { FaEdit, FaTrashAlt } from "react-icons/fa";
import React from "react";
import { useNavigate } from 'react-router-dom';
import dummyData from "../data_sources/dummy_data_kluster";

interface DoctorCluster {
    id: number;
    image: string;
    namaDokter: string;
    namaKluster: string;
    jamOperasional: string;
}

export default function TableKluster() {
    const navigate = useNavigate();

    const handleEditClick = (id: number) => {
        navigate(`/kluster/edit/${id}`);
    };

    const handleDeleteClick = (id: number) => {
        navigate(`/kluster/edit/${id}`);
    };

    const isClusterOperating = (jamOperasional: string): boolean => {
        const [start, end] = jamOperasional.split(' - ');
        const now = new Date();
        const startTime = new Date(now.toDateString() + ' ' + start);
        const endTime = new Date(now.toDateString() + ' ' + end);

        return now >= startTime && now <= endTime;
    };

    return (
        <div className="mt-6">
            <table className="min-w-full bg-white">
                <thead className="border border-gray-200 font-medium">
                <tr>
                    <th className="py-2 px-4">No</th>
                    <th className="py-2 px-4">Image</th>
                    <th className="py-2 px-4">Nama Dokter</th>
                    <th className="py-2 px-4">Nama Kluster</th>
                    <th className="py-2 px-4">Status Kluster</th>
                    <th className="py-2 px-4">Action</th>
                </tr>
                </thead>
                <tbody className="text-center text-[#7C7C7C]">
                {dummyData.map((data: DoctorCluster, index: number) => {
                    const statusKluster = isClusterOperating(data.jamOperasional) ? 'Beroperasi' : 'Tidak Beroperasi';

                    return (
                        <tr key={data.id}>
                            <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4 flex justify-center items-center">
                                <img src={data.image} alt={data.namaDokter} className="w-12 h-12 rounded-full object-cover" />
                            </td>
                            <td className="py-2 px-4">{data.namaDokter}</td>
                            <td className="py-2 px-4">{data.namaKluster}</td>
                            <td className="py-2 px-4">{statusKluster}</td>
                            <td className="py-2 px-4 text-[#B1E3FF] gap-4 flex justify-center">
                                <a href="#" onClick={() => handleEditClick(data.id)}>
                                    <FaEdit className="text-xl" />
                                </a>
                                <a href="#" onClick={() => handleDeleteClick(data.id)}>
                                    <FaTrashAlt className="text-xl" />
                                </a>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
