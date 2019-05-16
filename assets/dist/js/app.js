// const data = require('data.json');

(function() {

    function newJSON(callback) {
  
      let obj = new XMLHttpRequest();
        obj.overrideMimeType("application/json");
        obj.open('GET', 'data.json', true);
        obj.onreadystatechange = function () {
          if (obj.readyState == 4 && obj.status == "200") {
          callback(obj.responseText);
          }
      };
      obj.send(null);
     }
  
     function init() {
      newJSON(function(response) {
         let data = JSON.parse(response);
         let items = []
         for(let i = 0; i < data.length; i++){
          let contentNum = data[i]
          items.push(contentNum)
        }
        let container = document.getElementById('json-wrapper')
        container.innerHTML = items
      });
       }
       init()
  
  })();

// $(document).ready(function(){

//     $.getJSON( "data.json", function( data ) {
//       let items = [];
//       $.each( data, function( index, value ) {
//         items.push(value);
//       });
  
//       $('#json-wrapper').append(items)
//       });
  
//   })
