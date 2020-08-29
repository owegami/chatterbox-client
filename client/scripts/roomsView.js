var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(roomName, password) {
    //instantiate a room
      //the user can add a name and a password
        //submit
      //use jquery to append room name to select tag on chatterbox
      console.log('roomName', roomName, 'password', password);

      Rooms[roomName] = new Room(roomName, password);
  },

  render: function() {
  }

};


$('#addRoom').click(function() {
  $('#roomPrompt').css('opacity', '100%');
});

$('#roomSubmit').click(function() {
  var roomName = $('#rName').val();
  var password = $('#pWord').val();
  RoomsView.initialize(roomName, password);
  $('#roomPrompt').css('opacity', '0%');
});