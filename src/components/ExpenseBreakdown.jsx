import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const ExpenseBreakdown = () => {
    const labels = ['Food', 'Gas', 'Retail', 'Bills', 'Subscriptions', 'Transfers']

    const data = {
        labels: labels,
        datasets: [{
            label: 'Expenses',
            data: [200, 350, 450, 2000, 100, 1500],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {display: true},
            title: {display: true, text: "Expense Breakdown"},
        },
    };

    return (
        <div style={{ width: "90%", maxWidth: "800px", height: "400px", margin: "auto" }}>
            <h2>Expense Breakdown</h2>
            <Radar data={data} options={options} />
        </div>
    )
};

export default ExpenseBreakdown