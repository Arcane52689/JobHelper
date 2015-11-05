angular.module('AppTrackerUtilities').factory('FlashMessage', ['$timeout', function($timeout) {
  var FlashMessage = function(flash, id, type, text) {
    this.id = id;
    this.flash = flash;

    this.text = text;
    this.type = type;
    this.setUpDelete();
  }

  FlashMessage.prototype.setUpDelete = function() {

    $timeout( function() { this.flash.removeMessage(this.id) }.bind(this), this.flash.messageTimeOut);
  }

  FlashMessage.prototype.getClass = function() {
    return "flash-item" + " flash-" + this.type;
  }

  return FlashMessage
}])


angular.module('AppTrackerUtilities').factory('Flash' , ['FlashMessage', function(FlashMessage) {
  var Flash = function(options) {
    this.messages = [];
    this.idCount = 1;

    this.messageTimeOut = options.messageTimeOut || 5000;
  }

  Flash.prototype.hasMessages = function() {
    return (this.messages.length !== 0)
  }

  Flash.prototype.removeMessage = function(id) {
    var index = this.findMessageIndex(id)

    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }

  Flash.prototype.findMessageIndex = function(id) {
    var index = -1;
    this.messages.forEach(function(message, i) {
      if (id === message.id) {
        index = i
      }
    })
    return index;
  }

  Flash.prototype.addMessage = function(type, text) {
    var message = new FlashMessage(this, this.idCount, type, text);
    this.messages.push(message);
    this.idCount += 1;
    return this;
  }

  Flash.prototype.success = function(text) {
    if (text.constructory === Array) {
      for (var i = 0; i < text.length; i++) {
        this.addMessage('success', text[i]);
      }
    } else {
      this.addMessage('success', text)  
    }
  }

  Flash.prototype.error = function(text) {
    if (text.constructory === Array) {
      for (var i = 0; i < text.length; i++) {
        this.addMessage('error', text[i]);
      }
    } else {
      this.addMessage('error', text)
    }
  }

  Flash.prototype.messagesOfType = function(type) {
    var  result = [];
    this.messages.forEach(function(message) {
      if (message.type === type) {
        result.push(message);
      }
    })
    return result;
  }

  Flash.prototype.successMessages = function() {
    return this.messagesOfType('success');
  }

  Flash.prototype.errorMessages = function() {
    return this.messagesOfType('Error');
  }

  return Flash;

}])


angular.module('AppTrackerUtilities').factory("MyFlash", ['Flash', function(Flash) {
  var MyFlash = new Flash({});
  return MyFlash;
}])
