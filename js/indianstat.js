fetch('https://api.covid19india.org/data.json')
.then(response => {
    return response.json();
})
.then(data => {
    // console.log(data['statewise']);

    for(let i=1; i < (data['statewise'].length); i++){
        
        console.log(data['statewise'][i]['state']);
        console.log(data['statewise'][i]['confirmed']);
        console.log(data['statewise'][i]['recovered']);
        console.log(data['statewise'][i]['active']);
        console.log(data['statewise'][i]['deaths']);

            
        let tvalue = document.getElementById('tvalue');

        var row = tvalue.insertRow();
        
        row.insertCell(0);
        tvalue.rows[i].cells[0].innerHTML = i;
        // tvalue.rows[i].cells[0].style.background = 'linear-gradient(to right top, #6b17aa, #7d22b8, #8f2dc6, #a138d5, #b342e3)';
        tvalue.rows[i].cells[0].style.fontWeight = 'bold';

        row.insertCell(1);
        tvalue.rows[i].cells[1].innerHTML = data['statewise'][i]['state'];
        tvalue.rows[i].cells[1].style.fontWeight = 'bold';

        row.insertCell(2);
        tvalue.rows[i].cells[2].innerHTML  = data['statewise'][i]['confirmed'];
        tvalue.rows[i].cells[2].style.background = 'linear-gradient(to right top, #bb0606, #c32721, #c93b36, #ce4d4b, #d25e5e)';
        tvalue.rows[i].cells[2].style.color = 'white';
        
        row.insertCell(3);
        tvalue.rows[i].cells[3].innerHTML  = data['statewise'][i]['active'];
        tvalue.rows[i].cells[3].style.background = 'linear-gradient(to right top, #16409f, #2448b1, #3150c3, #3e58d5, #4b60e7)';
        tvalue.rows[i].cells[3].style.color = 'white';

        row.insertCell(4);
        tvalue.rows[i].cells[4].innerHTML  = data['statewise'][i]['recovered'];
        tvalue.rows[i].cells[4].style.background = "linear-gradient(to right top, #26913f, #33a445, #42b84b, #51cc51, #61e056)";
        tvalue.rows[i].cells[4].style.color = 'white';

        row.insertCell(5);
        tvalue.rows[i].cells[5].innerHTML  = data['statewise'][i]['deaths'];
        tvalue.rows[i].cells[5].style.background = 'linear-gradient(to right top, #343539, #414145, #4d4e50, #5b5b5d, #686869)';
        tvalue.rows[i].cells[5].style.color = 'white';
    }

    let maha = data['statewise']["21"]["confirmed"];
    let kar = data['statewise']["16"]["confirmed"];
    let ker = data['statewise']["17"]["confirmed"];
    let tn = data['statewise']["32"]["confirmed"];
    let up = data['statewise']["35"]["confirmed"];
    let ap = data['statewise']["2"]["confirmed"];
    let dl = data['statewise']["9"]["confirmed"];
    let wb = data['statewise']["37"]["confirmed"];
    let cg = data['statewise']["7"]["confirmed"];
    let rj = data['statewise']["29"]["confirmed"];

var ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width = 300;
ctx.canvas.height = 100;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Maharastra', 'Karnataka', 'Kerala' , 'Tamil Nadu' , 'Uttar Pradesh' , 'Andhra Pradesh' , ' Delhi' , "West Bengal" , ' Chattishgarh' , 'Rajasthan'],
        datasets: [{
            label: '# Total Confirmed Cases',
            data: [maha, kar, ker , tn, up, ap , dl , wb , cg , rj],
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
})

