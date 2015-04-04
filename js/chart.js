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

  var formatter = new google.visualization.NumberFormat(
    {negativeColor: 'red', negativeParens: true, pattern: '$###,###'});
      formatter.format(data, 1);

  // Set chart options
  var options = { backgroundColor: 'transparent' , 
    legend:{ position:'none' } , 
    width: '100%',
    height: '100%',
    chartArea: {
      width: 400 ,
      height: 400 },
    colors: ['#14b2db', '#109bba', '#1b849c', '#286a7c'],
    pieSliceBorderColor : "transparent"
    };

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

  var formatter = new google.visualization.NumberFormat(
    {negativeColor: 'red', negativeParens: true, pattern: '$###,###'});
      formatter.format(data, 1);

  // Set chart options
  var options = { backgroundColor: 'transparent' , 
    legend:{ position:'none' } , 
    width: '100%',
    height: '100%',
    chartArea: {
      width: 400 ,
      height: 400 },
    colors: ['#da9a3c', '#c9913a', '#b78639', '#a67c36', '#937136', '#836637', '#725c37', '#eca540'],
    pieSliceBorderColor : "transparent"
    };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_expenses'));
  chart.draw(data, options);
}

$(window).resize(function(){
  drawChartRev();
  drawChartExp();
});

