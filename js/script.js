// console.log("working");

$("#submit").click (function(){
  var city1 = $('#city').val();

  console.dir(city1);
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "22a1a380db5e4b209e511a684118ea53",
    'q': city1
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    function drawTable() {
    dataJSON = result;
    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn("string", "Snippet");
    dataTable.addColumn("string", "URL");
    console.log()

    // for (var i = 0; i < result.length; i++) {
      console.log("working")
      dataTable.addRows([result.response.docs[0].snippet, result.response.docs[0].web_url]);
    // }

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
  }
    console.log(result.response.docs);
  }).fail(function(err) {
    throw err;
  });
});
