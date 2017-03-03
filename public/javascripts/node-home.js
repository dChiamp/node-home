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






 


});