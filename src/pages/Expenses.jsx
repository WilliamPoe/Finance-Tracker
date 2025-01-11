import React from 'react'
import Navbar from '../components/Navbar'
import MonthlyComparison from '../components/MonthlyComparison'


const Expenses = () => {
    return (
        <div>
            <Navbar />
            <h1>Expenses</h1>
            <MonthlyComparison/>
        </div>
    )
}

export default Expenses