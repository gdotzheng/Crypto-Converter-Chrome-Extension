$(document).ready(function() {
  $("#amount").keyup(convert);
});

$(document).ready(function() {
  $("#from").change(convert);
});

$(document).ready(function() {
  $("#to").change(convert);
});

window.onload = function convert() {
  var from = document.getElementById('from').value;
  var to = document.getElementById('to').value;
  var xmlhttp = new XMLHttpRequest();
  var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + from + "&tsyms=" + to;
  var crypto = ['BTC', 'XRP', 'ETH', "BCH", 'XLM', 'EOS', 'LTC', 'ADA', 'XMR', 'TRX', 'DASH', 'XEM', 'ETC', 'NEO', 'ZEC', 'BTG']
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && crypto.indexOf(from) > -1) {
      var res = xmlhttp.responseText;
      var jsResult = JSON.parse(res);
      var price = jsResult.RAW[from][to].PRICE
      var amount = document.getElementById('amount').value;
      var result = document.getElementById('result').value;
      var final = price * amount
      document.getElementById('result').value = (price * amount).toFixed(2);
    } else {
      var res = xmlhttp.responseText;
      var jsResult = JSON.parse(res);
      var price = jsResult.RAW[from][to].PRICE
      var hrchange = jsResult.DISPLAY[from][to].CHANGE24HOUR
      var hrvolume = jsResult.DISPLAY[from][to].VOLUME24HOUR
      var lstupdate = jsResult.DISPLAY[from][to].LASTUPDATE
      var amount = document.getElementById('amount').value;
      var result = document.getElementById('result').value;
      var change = document.getElementById('24hrchange');
      var volume = document.getElementById('24hrvolume');
      var update = document.getElementById('lastupdate');
      var data = document.getElementById('coin');
      var final = price * amount
      document.getElementById('result').value = (price * amount).toFixed(5);
      change.innerHTML = hrchange;
      volume.innerHTML = hrvolume;
      update.innerHTML = lstupdate;
      coin.innerHTML = from;
    }
  }
}

function convert() {
  var from = document.getElementById('from').value;
  var to = document.getElementById('to').value;
  var xmlhttp = new XMLHttpRequest();
  var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + from + "&tsyms=" + to;
  var crypto = ['BTC', 'XRP', 'ETH', "BCH", 'XLM', 'EOS', 'LTC', 'ADA', 'XMR', 'TRX', 'DASH', 'XEM', 'ETC', 'NEO', 'ZEC', 'BTG']
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && crypto.indexOf(from) > -1) {
      var res = xmlhttp.responseText;
      var jsResult = JSON.parse(res);
      var price = jsResult.RAW[from][to].PRICE
      var amount = document.getElementById('amount').value;
      var result = document.getElementById('result').value;
      var final = price * amount
      document.getElementById('result').value = (price * amount).toFixed(2);
    } else {
      var res = xmlhttp.responseText;
      var jsResult = JSON.parse(res);
      var price = jsResult.RAW[from][to].PRICE
      var hrchange = jsResult.DISPLAY[from][to].CHANGE24HOUR
      var hrvolume = jsResult.DISPLAY[from][to].VOLUME24HOUR
      var lstupdate = jsResult.DISPLAY[from][to].LASTUPDATE
      var amount = document.getElementById('amount').value;
      var result = document.getElementById('result').value;
      var change = document.getElementById('24hrchange');
      var volume = document.getElementById('24hrvolume');
      var update = document.getElementById('lastupdate');
      var data = document.getElementById('coin');
      var final = price * amount
      document.getElementById('result').value = (price * amount).toFixed(5);
      change.innerHTML = hrchange;
      volume.innerHTML = hrvolume;
      update.innerHTML = lstupdate;
      coin.innerHTML = from;
    }
  }
}
