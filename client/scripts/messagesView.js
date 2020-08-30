var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // console.log('MS:', Messages.storage, Messages.storage.length);
    // var arrayOfDomMessages = _.map(Messages.storage, function(messageData) {
    //   console.log('here');
    //   return MessageView.render(messageData);
    // });
    var arrayOfDomMessages = [];

    for (var i = 0; i < Messages.storage.length; i++) {
      let tempDomStr = MessageView.render();

      //put message from messages.storage into html in message view

      // console.log(tempDomStr);

      //break the first segment of the string after the <div class="username"> store that in some temp variable
      var firstThird = tempDomStr.substring(0, 52);
      var secondThird = tempDomStr.substring(52, 83);
      var thirdThird = tempDomStr.substring(83);
      tempDomStr = firstThird + escapeFunction(Messages.storage[i].username) + secondThird + escapeFunction(Messages.storage[i].text) + thirdThird;

      // console.log(tempDomStr);

      arrayOfDomMessages.push(tempDomStr);

      //
    }
    MessagesView.render(arrayOfDomMessages);

  },

  render: function(array) {

    //iterate through arrayOfDomMessages
    for (var i = 0; i < array.length; i++) {
      //select #chats
      //prepend each to #chats
      $('#chats').prepend(array[i]);
    }


  },

  renderMessage: function(text, username, room) {
    //on click of submit button, we'll have our message data pulled from the text box(get id)
    //it'll be sent here in the format which includs the roomname, username, and text (object)
    console.log(text, username, room)
    // use parse.create to send the message data object to the server
    // use settimeout to put a hold on the readall below
    //call MessagesView.initialize() to update the page

  }
};

// Needs to get the messages from the server and then parse them into something the users can see these messages and then, when they post messages, they'll post them to the server which will, in turn, render those messages into something that the users can see as well. Don't post it client side as that will make it so only the user can see their messages.

var escapeFunction = function(string) {
  //& < > ' " % #
  //use instance of to find out if there are special chacters in use in the string
  // if so:
  //we first break down each string (user names and texts) into an array of strings
  //index of to find the bad characters
  // wherever that placement is, we'll go one index ahead of it (n - 1) insert a \ into that index
  // then we join it up and celebrate by returning it

  //
  var result = '';
  var escChars = ['&', '<', '>', '%', '#', '$', '\\'];

  for (var i = 0; i < string.length; i++) {
    //if not an escChar
    if (!escChars.includes(string[i])) {
      result += string[i];
    } else {
      result += '\\' + string[i];
    }

  }
  return result;
};