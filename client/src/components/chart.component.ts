import Chart, { ChartItem } from 'chart.js/auto';

function createBarChart(elementId: string, chartData: { days: string[], values: number[], title: string }) {
    const element = document.getElementById(elementId) as ChartItem;

    new Chart(element, {
        type: 'bar',
        data: {
            labels: chartData.days.slice(-10),
            datasets: [{
                label: 'records',
                data: chartData.values.slice(-10),
                borderWidth: 1,
                backgroundColor: '#1ed18375'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: chartData.title + " Chart"
                }
            }
        }
    });

}

function createLineChart(elementId: string, chartData: { days: string[], values: number[], title: string }) {
    const element = document.getElementById(elementId) as ChartItem;

    new Chart(element, {
        type: 'line',
        data: {
            labels: chartData.days.slice(-10),
            datasets: [{
                label: 'records',
                data: chartData.values.slice(-10),
                borderWidth: 3,
                borderColor: '#1ed183',
                backgroundColor: '#1ed183'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: chartData.title + " Chart"
                }
            }
        }
    });

}

export {
    createBarChart,
    createLineChart
}