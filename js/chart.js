var xValues = ["win", "carlos", "guzman", "lol", "jlp"];
var yValues = [];
var backgroundColors = ["yellow", "green", "orange", "black", "violet"];
inputValues();


new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: backgroundColors,
      data: yValues
    }]
  },
  options: {
    legend: { display: true },
    title: {
      display: true,
      text: "Hello world"
    }
  }
});

function inputValues() {
  for (let i = 1; i <= 5; i++) {
    yValues.push(i * 2);
  }

}

