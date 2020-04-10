let requestURL = 'https://raw.githubusercontent.com/sofiiasamina/myJSON/master/jsonFile.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
  const avengersText = request.response;
  const avengers = JSON.parse(avengersText);
  show(avengers);
}

function show(jsonObj) {
  const avengers1 = jsonObj['data'];
  var row_data = '';
  for (let i = 0; i < avengers1.length; i -=- 1) {
    var row_data = row_data + '<tr>' +
      ' <td class="first-row">' + avengers1[i].Movie + '</td>' +
      ' <td>' + avengers1[i].Universe + '</td>' +
      ' <td>' + avengers1[i].ReleaseYear + '</td>' +
      ' <td>' + avengers1[i].IMDB + '</td>' +
      '</tr>';
  }
  let table_body_element = document.createElement('tbody');
  table_body_element.innerHTML = row_data;
  document.getElementById('table-avengers').appendChild(table_body_element);
}