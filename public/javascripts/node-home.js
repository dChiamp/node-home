$( document ).ready(function() {
    console.log( "ready!" );


  $('#servo-on').on('click', function() {
    console.log("clicked on");

    $.ajax({
       type: 'GET',
       url: '/api/servo/on',
       // data: {
       //    format: 'json'
       // },
       error: function() {
         console.log("error")
       },
       dataType: 'json',
       success: function(data) {
        console.log("success", data)
        $('.light-status').css('background-color', 'green')
        $('#light-state').html('On')

       }
    });

  })

  $('#servo-off').on('click', function() {
      console.log("clicked off");

      $.ajax({
         type: 'GET',
         url: '/api/servo/off',
         // data: {
         //    format: 'json'
         // },
         error: function() {
           console.log("error")
         },
         // dataType: 'jsonp',
         success: function(data) {
          console.log("success", data)
          $('.light-status').css('background-color', 'red')
          $('#light-state').html('Off')

         }
      });


  });





  $('#relay-on').on('click', function() {
    console.log("clicked on");

    $.ajax({
      type: 'GET',
       url: '/api/relay/open',
       // data: {
       //    format: 'json'
       // },
       error: function() {
         console.log("error")
       },
       // dataType: 'jsonp',
       success: function(data) {
        console.log("success", data)
          var state;
          var doorColor;
          if (data == 'on') {
             state = 'Open';
             doorColor = 'green';
          } else if ( data = 'off ') {
             state = 'Closed';
             doorColor = 'red';
          } else {
            state = 'Eroor';
          }

          $('.relay-status').css('background-color', doorColor)
          $('#relay-state').html(state)

       }
    });

  })

  $('#relay-off').on('click', function() {
      console.log("clicked off");

      $.ajax({
        type: 'GET',
         url: '/api/relay/close',
         // data: {
         //    format: 'json'
         // },
         error: function() {
           console.log("error")
         },
         // dataType: 'jsonp',
         success: function(data) {
          console.log("success", data)
          var state;
          var doorColor;
          if (data == 'on') {
             state = 'Open';
             doorColor = 'green';
          } else if ( data = 'off ') {
             state = 'Closed';
             doorColor = 'red';
          } else {
            state = 'Eroor';
          }

          $('.relay-status').css('background-color', doorColor)
          $('#relay-state').html(state)


         }
      });


  });


  var stationIds = {
    'chinaTown': 80410,
    'southwestMuseum': 80413
  }

  var destinations = {
    "804_0_var0": 'asuza / citrus',
    "804_1_var0": 'Atlantic'
  }

  var globalStationId;

  $('#station-select').on('change', function() {
    var stationId = $(this).val();
    globalStationId = stationId
    console.log("globalStationId", globalStationId);

  });

  $('#get-times').on('click', function() {

      if (globalStationId != undefined ) {

        var url = `/api/rail/${globalStationId}`

        console.log("url", url);

        $.ajax({
          type: 'GET',
           url: url,
           error: function() {
             console.log("error")
           },
           // dataType: 'jsonp',
           success: function(data) {
            console.log("success", data)
            parseData(data.items)

           }
        });

      } else {
        console.log("select a station")
      }

  });

function parseData (data) {
  console.log("parseData: ", data)
  for ( var i = 0; i < data.length; i++ ) {
    
    var stop = data[i]
    var direction = stop['run_id']

    var destination = destinations[direction]
    var minutes = stop['minutes']

    console.log("destination: ", destination, "minutes: ", minutes);

    $('#stop-info').append("<li> destination: " + destination + " departing in: " + minutes+ "</li>")


  }

}






 


});