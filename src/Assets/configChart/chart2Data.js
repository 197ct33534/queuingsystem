// var A = [1, 13, 19, 31];
//  var xValues = [];
// for (let i = 1; i <= 35; i++) {
//     if (A.includes(i)) {
//         xValues.push(i);
//     } else {
//         xValues.push("");
//     }
// }

const ctx = document.createElement("canvas").getContext("2d");
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(1, "rgba(206, 221, 255, 0)");
// gradient.addColorStop(0.5, "#20f08b");
gradient.addColorStop(0, "rgba(206, 221, 255, 1)");

export const data = (xValues, yValues) => ({
    labels: [...xValues],
    datasets: [
        {
            label: "",
            fill: true,
            lineTension: 0.1,
            backgroundColor: gradient,
            borderColor: "#7B61FF",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBackgroundColor: "#5185F7",
            pointBorderColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#5185F7",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: yValues,
        },
    ],
});

export const lineOptions = {
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: false,
                },
            },
        ],
        yAxes: [
            {
                // stacked: true,
                gridLines: {
                    display: true,
                    drawBorder: false,
                },
                ticks: {
                    beginAtZero: true,

                    userCallback(value) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(".");
                        return `${value}`;
                    },
                },
            },
        ],
    },
    legend: {
        display: false,
    },
    tooltips: {
        displayColors: false,
        enabled: true,
        backgroundColor: "#5185F7",
        titleFontSize: 18,
        xPadding: 32,
        yPadding: 8,
        caretSize: 9,
        callbacks: {
            labelTextColor(tooltipItem, chart) {
                return "#fff";
            },
            title: function (tooltipItems, data) {
                return data.datasets[tooltipItems[0].datasetIndex].data[
                    tooltipItems[0].index
                ].x;
            },
        },
    },
};
