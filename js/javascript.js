

/* ----------- Lijn diagram -------------- */
Chart.defaults.global.defaultFontColor = 'white'; 
<<<<<<< HEAD

=======
>>>>>>> parent of ede43cb... java gewijzigd
var ctx = document.getElementById('line').getContext('2d');
var myChart = new Chart(ctx, {

    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Maart', 'April', 'Mei'],
        datasets: [{
            label: 'Verwachtig aantal porties drinken/eten',
            data: [ 850, 500, 400, 200, 100],
            backgroundColor: ["#6DBCDB"],
            
            borderColor: [
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


<<<<<<< HEAD

/* ----------- Donut -------------- */
var ctx = document.getElementById('donut');
var donut = new Chart (ctx, {
=======
/* ----------- Donut-------------- */

new Chart(document.getElementById("donut"), {
>>>>>>> parent of ede43cb... java gewijzigd
    type: 'pie',
    data: {
      labels: ["Verbruikte brandstof", "Aanwezige brandstof"],
      datasets: [{
        label: "Brandstof in de tank",
        backgroundColor: ["#8e5ea2", "#6DBCDB"],
        data: [20,80]
      }]
    },
    options: {
      responsive:true,
        maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Brandstof in het ruimteschip'
      }
    }
});


/* -----------staaf diagram (bar)-------------- */

<<<<<<< HEAD
var ctx = document.getElementById('bar');
var bar = new Chart (ctx, {
=======
new Chart(document.getElementById("bar"), {
>>>>>>> parent of ede43cb... java gewijzigd
    type: 'horizontalBar',
    data: {
      labels: ["maandag", "dinsdag", "woensdag", "donderdag", "vandaag"],
      datasets: [
        {
          label: "Afgelegde afstand",
          backgroundColor: ["#6DBCDB", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [70,120,60,80,10]
        }
      ]
    },
    options: {
      responsive:true,
      maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'Afstand afgelegd in km per dag (X miljard)'
      }
    }
});
