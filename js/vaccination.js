var ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width = 300;
ctx.canvas.height = 100;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['China' , 'USA',  'India' , 'Brazil' , 'United Kingdom' , 'Germany' , 'France' , 'Italy' , 'Turkey' , 'Russia'] ,
        datasets: [{
            label: '# Total Vaccination Count in Million',
            data: [497, 286, 195, 62.5, 60.6 , 44.4 , 33.5 , 31 , 27 , 24],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [
              {
                gridLines: {
                      lineWidth: 0
                  }
              }
            ]
          }
    }
});