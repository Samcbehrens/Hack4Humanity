// CREATE A REFERENCE TO FIREBASE
  var messagesRef = new Firebase('https://vivid-torch-7746.firebaseio.com');

  // REGISTER DOM ELEMENTS
  var usernameField = $('#usernameInput');
  var emailField = $('#emailInput');
  var phoneField = $('#phoneInput');
  var organizationField=$('#orgInput');
  var detailsField=$('#detailsFieldInput');
  var facebookField=$('#facebookInput');
  var instagramField=$('#instagramInput');
  var twitterField=$('#twitterInput');
  
  // LISTEN FOR KEYPRESS EVENT
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var username = usernameField.val();
      var emailAd = emailField.val();
      var phonenumber = phoneField.val();
      var organizationName=organizationField.val();
      var detailsOforg=detailsField.val();
      var fbAd=facebookField.val();
      var instagramAd=instagramField.val();
      var twitterAd=twitterField.val();
     

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      messagesRef.push({name:username, details:DetailsofOrg,email:email,phone:phonenumber, orgName:organizationName,facebook:fbAd, instagram:instagramAd, twitter:twitterAd});
      messageField.val('');
    }
  });

  // Add a callback that is triggered for each chat message.
  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
    //GET DATA
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;

    //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
    var messageElement = $("<li>");
    var nameElement = $("<strong class='example-chat-username'></strong>")
    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    //ADD MESSAGE
    messageList.append(messageElement)

    //SCROLL TO BOTTOM OF MESSAGE LIST
    messageList[0].scrollTop = messageList[0].scrollHeight;
  });

