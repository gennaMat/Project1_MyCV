FB.login(function(response) {
    console.log(response);
  }, {scope: 'user_birthday'});

  FB.api(
    '/me',
    'GET',
    {"fields":"id,name"},
    function(response) {
        // Insert your code here
    }
  );

  FB.api(
    '/me/feed',
    'GET',
    {},
    function(response) {
        // Insert your code here
    }
  );


  FB.api(
    '/{your-user-id}',
    'GET',
    {"fields":"birthday,email,hometown"},
    function(response) {
        // Insert your code here
    }
  );