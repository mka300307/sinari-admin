import React, { useState } from 'react';

import dataPasien from "../data_sources/dummy_pasien";
import dataKluster from "../data_sources/dummy_kluster";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from "recharts";

type Data = typeof dataPasien | typeof dataKluster;

const ChartBar: React.FC = () => {
    const [data, setData] = useState<Data>(dataPasien);
    const [activeLabel, setActiveLabel] = useState<'pasien' | 'kluster'>('pasien');

    const handleLabelClick = (label: 'pasien' | 'kluster') => {
        if (label === 'pasien') {
            setData(dataPasien);
        } else if (label === 'kluster') {
            setData(dataKluster);
        }
        setActiveLabel(label);
    };

    return (
        <div className="w-full p-6 bg-white rounded-xl">
            <div className="flex gap-3">
                <p
                    className={`text-[14px] font-bold cursor-pointer ${activeLabel === 'pasien' ? 'text-black' : 'text-[#A4A4A4]'}`}
                    onClick={() => handleLabelClick('pasien')}
                >
                    Total Pasien Baru
                </p>
                <p
                    className={`text-[14px] font-bold cursor-pointer ${activeLabel === 'kluster' ? 'text-black' : 'text-[#A4A4A4]'}`}
                    onClick={() => handleLabelClick('kluster')}
                >
                    Total Submit Skrining
                </p>
                <p className="text-[14px] font-normal text-[#A4A4A4]">|</p>
                <div className="flex items-center gap-1">
                    <div className="w-[10px] h-[9.5px] rounded-full bg-[#E0ECF2]"/>
                    <p className="text-[14px] font-normal text-black">Minggu ini</p>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-[10px] h-[9.5px] rounded-full bg-[#67C6FB]"/>
                    <p className="text-[14px] font-normal text-black">Minggu kemarin</p>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={data}
                    margin={{
                        top: 50, right: 0, left: 0, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Bar dataKey="thisWeek" fill="#E0ECF2"/>
                    <Bar dataKey="lastWeek" fill="#67C6FB"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartBar;
