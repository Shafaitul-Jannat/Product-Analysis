import React from 'react';
import Linechart from '../Linechart/Linechart'
import GetDataChart from '../../hooks/dataChart'
import AreaC from '../AreaC/AreaC'
import PieC from '../PieC/PieC'


const Dashboard = () => {
    const [dataChart, setDataChart] = GetDataChart();
    console.log(dataChart)
    return (
        <div className="grid grid-cols-2 gap-5 px-8 mt-16" >
            <div>
                <Linechart></Linechart>
            </div>
            <div>
                <AreaC></AreaC>
            </div>
            <div>
                <PieC></PieC>
            </div>
        </div>
    );
};

export default Dashboard;