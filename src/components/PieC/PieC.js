import React from 'react';
import GetDataChart from '../../hooks/dataChart';
import { PieChart, Pie, } from 'recharts';

const PieC = () => {
    const [data, setData] = GetDataChart();
    return (
        <PieChart width={730} height={250}>
            <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="revenue" nameKey="sell" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />

        </PieChart>
    );
};

export default PieC;