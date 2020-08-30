var FormView = {

  $form: $('#send'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();


    var text = $('#message').val();
    var username = window.location.search.substr(10);
    console.log(text, username)
    //call renderMessage
    // MessagesView.renderMessage(text, username, room);


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

//user, message, room name