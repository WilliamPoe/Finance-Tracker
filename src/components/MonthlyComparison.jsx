import React, {useEffect} from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const MonthlyComparison = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const data = {
        labels: labels,
        datasets: [{
            label: "Monthly Spending",
            data: [65, 59, 80, 81, 56, 55, 40, 45, 72, 25, 23, 92],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {display: true},
            title: {display:true, text: "Monthly Spending Breakdown"},
        },
    };

    useEffect(() => {
        return () => {
            ChartJS.unregister();
        };
    }, []);

    return (
        <div style={{ width: "110%", height: "400px", margin: "auto" }}>
            <h2>Monthly Spending Breakdown</h2>
            <Bar data={data} options = {options} />
        </div>
    );
};

export default MonthlyComparison;