import { useEffect, useState } from "react"

const GetDataChart = () => {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDataChart(data))
    }, []);

    return [dataChart, setDataChart];
}

export default GetDataChart;