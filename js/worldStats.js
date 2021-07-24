fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "b8ece1d7ccmsh1ea161b9ff072f5p1df2edjsn13ec7da5a182",
          "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          // console.log(data.length);
          // console.log(data[2]);
          // console.log(data[2]['Country_text']);
          // console.log(data[2]['Total Cases_text']);
          // console.log(data[2]['Active Cases_text']);
          // console.log(data[2]['Total Recovered_text']);
          // console.log(data[2]['Total Deaths_text']);
          // console.log(data[2]['New Cases_text']);
          // console.log(data[2]['New Deaths_text']);

          for (let i = 1; i < data.length - 1; i++) {
            const tvalue = document.getElementById("tvalue");

            const row = tvalue.insertRow();

            row.insertCell(0);
            tvalue.rows[i].cells[0].innerHTML = i;

            row.insertCell(1);
            tvalue.rows[i].cells[1].innerHTML = data[i]["Country_text"];
            tvalue.rows[i].cells[1].style.fontWeight = "bold";

            row.insertCell(2);
            tvalue.rows[i].cells[2].innerHTML = data[i]["Total Cases_text"];
            tvalue.rows[i].cells[2].style.background =
              "linear-gradient(to right top, #bb0606, #c32721, #c93b36, #ce4d4b, #d25e5e)";
            tvalue.rows[i].cells[2].style.color = "white";

            row.insertCell(3);
            tvalue.rows[i].cells[3].innerHTML = data[i]["Active Cases_text"];
            tvalue.rows[i].cells[3].style.background =
              "linear-gradient(to right top, #16409f, #2448b1, #3150c3, #3e58d5, #4b60e7)";
            tvalue.rows[i].cells[3].style.color = "white";

            row.insertCell(4);
            tvalue.rows[i].cells[4].innerHTML = data[i]["Total Recovered_text"];
            tvalue.rows[i].cells[4].style.background =
              "linear-gradient(to right top, #26913f, #33a445, #42b84b, #51cc51, #61e056)";
            tvalue.rows[i].cells[4].style.color = "white";

            row.insertCell(5);
            tvalue.rows[i].cells[5].innerHTML = data[i]["Total Deaths_text"];
            tvalue.rows[i].cells[5].style.background =
              "linear-gradient(to right top, #343539, #414145, #4d4e50, #5b5b5d, #686869)";
            tvalue.rows[i].cells[5].style.color = "white";

            row.insertCell(6);
            tvalue.rows[i].cells[6].innerHTML = data[i]["New Cases_text"];
            tvalue.rows[i].cells[6].style.background =
              "linear-gradient(to right top, #bf0606, #c82721, #cf3b36, #d84d4b, #ea5e5e)";
            tvalue.rows[i].cells[6].style.color = "white";

            row.insertCell(7);
            tvalue.rows[i].cells[7].innerHTML = data[i]["New Deaths_text"];
            tvalue.rows[i].cells[7].style.background =
              "linear-gradient(to right top, #343539, #414145, #4d4e50, #5b5b5d, #686869)";
            tvalue.rows[i].cells[7].style.color = "white";
          }

          let usa = parseInt(data[1]['Total Cases_text'].replaceAll(",", ""));
        //   usa_without_comma = usa; 
        //   console.log(usa_without_comma);
          let ind = parseInt(data[2]['Total Cases_text'].replaceAll(",", ""));
        //   console.log(parseInt(ind));
          let brazil = parseInt(data[3]['Total Cases_text'].replaceAll(",", ""));
          let fra = parseInt(data[4]['Total Cases_text'].replaceAll(",", ""));
          let tur = parseInt(data[5]['Total Cases_text'].replaceAll(",", ""));
          let rsa = parseInt(data[6]['Total Cases_text'].replaceAll(",", ""));
          let uk = parseInt(data[7]['Total Cases_text'].replaceAll(",", ""));
          let ity = parseInt(data[8]['Total Cases_text'].replaceAll(",", ""));
          let ger = parseInt(data[9]['Total Cases_text'].replaceAll(",", ""));
          let spn = parseInt(data[10]['Total Cases_text'].replaceAll(",", ""));
          
          var ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width = 300;
ctx.canvas.height = 100;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['USA', 'India', 'Brazil' , 'France' , 'Turkey' , 'Russia' , ' Britain' , "Italy" , 'Germany' , 'Spain'],
        datasets: [{
            label: '# Total Confirmed Cases',
            data: [usa, ind, brazil, fra, tur, rsa, uk, ity, ger, spn],
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
        .catch((err) => {
          console.error(err);
        });