import React from 'react';
import Navbar from '../components/Navbar';
import MonthlyComparison from '../components/MonthlyComparison';
import ExpenseBreakdown from '../components/ExpenseBreakdown';
import "../styles/Expenses.css";


const Expenses = () => {
    return (
        <div>
            <Navbar />
            <h1>Expenses</h1>
            <div className="chart-container">
            <MonthlyComparison/>
            </div>
            <div className="chart-container">
            <ExpenseBreakdown/>
            </div>
        </div>
    )
};

export default Expenses