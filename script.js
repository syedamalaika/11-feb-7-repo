// Initialize Charts and UI when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initMainChart();
    initRevenueChart();
    initSidebarToggle();
});

function initSidebarToggle() {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });
    }
}

function initMainChart() {
    const ctx = document.getElementById('mainChart').getContext('2d');

    // Gradient for the line chart
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(67, 24, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(67, 24, 255, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
            datasets: [{
                label: 'Total Spent',
                data: [50, 40, 300, 220, 500, 250],
                borderColor: '#4318FF',
                borderWidth: 3,
                fill: true,
                backgroundColor: gradient,
                tension: 0.4,
                pointRadius: 0
            }, {
                label: 'Previous Period',
                data: [30, 90, 40, 140, 290, 290],
                borderColor: '#6AD2FF',
                borderWidth: 3,
                fill: false,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        color: '#A3AED0',
                        font: {
                            family: 'DM Sans',
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

function initRevenueChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['17', '18', '19', '20', '21', '22', '23', '24', '25'],
            datasets: [{
                label: 'Revenue',
                data: [40, 35, 60, 50, 30, 40, 55, 45, 60],
                backgroundColor: '#4318FF',
                borderRadius: 10,
                barThickness: 12
            }, {
                label: 'Profit',
                data: [20, 15, 30, 25, 10, 20, 25, 15, 35],
                backgroundColor: '#6AD2FF',
                borderRadius: 10,
                barThickness: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    display: false
                },
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        color: '#A3AED0'
                    }
                }
            }
        }
    });
}
