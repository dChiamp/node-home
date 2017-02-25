$( document ).ready(function() {
    console.log( "ready!" );


  $('#servo-on').on('click', function() {
    console.log("clicked on");

    $.ajax({
       url: '/api/servo/on',
       data: {
          format: 'json'
       },
       error: function() {
         console.log("error")
       },
       // dataType: 'jsonp',
       success: function(data) {
        console.log("success", data)
        $('.light-status').css('background-color', 'green')
        $('#light-state').html('On')

       },
       type: 'GET'
    });

  })

  $('#servo-off').on('click', function() {
      console.log("clicked off");

      $.ajax({
         url: '/api/servo/off',
         data: {
            format: 'json'
         },
         error: function() {
           console.log("error")
         },
         // dataType: 'jsonp',
         success: function(data) {
          console.log("success", data)
          $('.light-status').css('background-color', 'red')
          $('#light-state').html('Off')

         },
         type: 'GET'
      });


  });





  $('#relay-on').on('click', function() {
    console.log("clicked on");

    $.ajax({
       url: '/api/relay/open',
       data: {
          format: 'json'
       },
       error: function() {
         console.log("error")
       },
       // dataType: 'jsonp',
       success: function(data) {
        console.log("success", data)
          $('.relay-status').css('background-color', 'green')
          $('#relay-state').html('On')

       },
       type: 'GET'
    });

  })

  $('#relay-off').on('click', function() {
      console.log("clicked off");

      $.ajax({
         url: '/api/relay/close',
         data: {
            format: 'json'
         },
         error: function() {
           console.log("error")
         },
         // dataType: 'jsonp',
         success: function(data) {
          console.log("success", data)
          $('.relay-status').css('background-color', 'red')
          $('#relay-state').html('Off')


         },
         type: 'GET'
      });


  });


});