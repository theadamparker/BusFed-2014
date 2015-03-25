// revenues

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChartRev);
function drawChartRev() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Grants', 721600],
    ['Contributions', 136936],
    ['In-Kind Contributions', 5617],
    ['Interest Income', 1025],
    ['Other Revenue', 694]
  ]);

  // Set chart options
  var options = {'title':'Bus Fed Revenue'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_revenue'));
  chart.draw(data, options);
}

// expenses

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChartExp);
function drawChartExp() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Personnel', 235465],
    ['Professional Services', 41958],
    ['Technology', 18211],
    ['Office & Overhead', 15060],
    ['Travel & Events', 77359],
    ['Materials', 37736],
    ['Partnerships & Grants', 248558],
    ['Fiscal Sponsorship Fees', 19792]
  ]);

  // Set chart options
  var options = {'title':'Bus Fed Expenses'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_expenses'));
  chart.draw(data, options);
}

$(window).resize(function(){
  drawChartRev();
  drawChartExp();
});

