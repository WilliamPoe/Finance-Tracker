import React, {useEffect} from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseBreakdown = () => {
    return (
        <div>ExpenseBreakdown</div>
    )
}

export default ExpenseBreakdown