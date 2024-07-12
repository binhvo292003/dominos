'use client';

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}

interface ChartOptions {
    plugins: {
        legend: {
            position: 'top' | 'left' | 'bottom' | 'right' | 'chartArea';
        };
        title: {
            display: boolean;
            text: string;
        };
    };
    maintainAspectRatio: boolean;
    responsive: boolean;
}
const BarChart = () => {
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState<ChartOptions>({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Weekly Sales',
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    });

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)',
                },
            ],
        });
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Weekly Sales',
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <div className="w-full col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default BarChart;
