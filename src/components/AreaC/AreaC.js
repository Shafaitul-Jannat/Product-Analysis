import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import GetDataChart from '../../hooks/dataChart';

const AreaC = () => {
    const [data, setData] = GetDataChart();
    return (

        <AreaChart
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
            <Legend></Legend>
            <Area type="monotone" dataKey="sell" stackId="1" stroke="#0555f5" fill="#7f03fc" />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#03631e" fill="#82ca9d" />
            <Area type="monotone" dataKey="investment" stackId="1" stroke="#7f03fc" strokeDasharray="5 5" fill="#ffc658" />
        </AreaChart>

    );
};

export default AreaC;