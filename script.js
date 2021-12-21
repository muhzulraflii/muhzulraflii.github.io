function loadChart() {
  var chart = document.querySelector("#sidebar");

  chart.classList.add('tampil');
  showChart();
}

function closeChart() {
  var chart = document.querySelector("#sidebar");

  chart.classList.remove('tampil');
}


//global var
var chart = [];

// var ayam = 'ayam';

// var food = {
//   nama: 'pecel',
//   harga: 5
// }

// var drink = {
//   nama: ayam,
//   harga: 3
// }

// chart.push(food);
// chart.push(drink)

function addToChart(nama, harga) {
  var food = {
    nama: nama,
    harga: harga
  }

  chart.push(food);
}

function showChart() {
  var parent = document.getElementById("pesanan");
  parent.innerHTML = '';

  var totHar = 0;
  if(chart != null) {
    for (let index = 0; index < chart.length; index++) {
      var food = document.createElement("div");
      food.setAttribute("class", "food");

      var name = document.createElement("div");
      name.setAttribute("class", "nama");
      var text = document.createTextNode(chart[index].nama);

      name.appendChild(text);

      var harga = document.createElement("div");
      harga.setAttribute("class", "harga");
      var textHarga = document.createTextNode(chart[index].harga);

      harga.appendChild(textHarga);

      food.appendChild(name);
      food.appendChild(harga);
      
      parent.appendChild(food);
      totHar += chart[index].harga;

      if (index == chart.length - 1) {
        var food = document.createElement("div");
        food.setAttribute("class", "food");
    
        var name = document.createElement("div");
        name.setAttribute("class", "nama");
        var text = document.createTextNode("Total Harga");
    
        name.appendChild(text);
    
        var harga = document.createElement("div");
        harga.setAttribute("class", "harga");
        var textHarga = document.createTextNode(totHar);
    
        harga.appendChild(textHarga);
    
        food.appendChild(name);
        food.appendChild(harga);
    
        var garis = document.createElement("hr");
    
        parent.appendChild(garis);
        parent.appendChild(food);
      }
    }

    
  }

  
}