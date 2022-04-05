import React from 'react';
import GetDataChart from '../../hooks/dataChart';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const Linechart = () => {
    const [data, setData] = GetDataChart();
    return (
        <LineChart
            width={600} height={300} data={data}
            margin={{
                top: 5,
                right: 20,
                bottom: 5,
                left: 5,
            }}
        >
            <CartesianGrid />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#7f03fc" strokeDasharray="5 5" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
    );
};

export default Linechart;