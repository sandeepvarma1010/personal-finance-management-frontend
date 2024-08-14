import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TransactionChart = ({ transactions }) => {
    const incomeTransactions = transactions.filter(transaction => transaction.type === 'Income');
    const expenseTransactions = transactions.filter(transaction => transaction.type === 'Expense');

    // Prepare data for the chart
    const chartData = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                label: 'Amount',
                data: [
                    incomeTransactions.reduce((acc, curr) => acc + curr.amount, 0),
                    expenseTransactions.reduce((acc, curr) => acc + curr.amount, 0)
                ],
                backgroundColor: ['#36a2eb', '#ff6384'],
                hoverBackgroundColor: ['#36a2eb', '#ff6384']
            }
        ]
    };

    return (
        <div>
            <h2>Transaction Overview</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default TransactionChart;
