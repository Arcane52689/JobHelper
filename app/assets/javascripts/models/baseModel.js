angular.module('AppTrackerModels').factory( 'ModelFactory', ['$http',function($http) {
  ModelFactory = {};
  ModelFactory.inherits = function(child, parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
  }

  var BaseModel = ModelFactory.BaseModel = function(data) {

    this.updateAtrributes(data);
  }

  BaseModel.prototype.updateAttributes = function(data) {
    data = data || {}
    this.attributes = {};
    for (key in data){
      if (data.hasOwnProperty) {
        this.attributes[key] = data[key];
      }
    }
    if (data.id) {
      this.id = data.id;
    }
  }

  BaseModel.prototype.isNew = function() {
    return !this.id;
  }

  BaseModel.prototype.url = function() {
    return "";
  }

  BaseModel.prototype.data = function() {
    return  this.attributes;
  }

  BaseModel.prototype.save = function(options) {
    if (this.isNew()) {
      this.create(options);
    } else {
      this.update(options);
    }
  }


  BaseModel.prototype.create = function(options) {
    $http.post(this.url(), this.attributes).success(function(resp) {
      options.success && options.success(resp);
    }).error(function(resp) {
      options.error && options.error(resp);
    })
  }

  BaseModel.prototype.update = function(options) {
    $http.put(this.url(), this.attributes).success(function(resp) {
      options.success && options.success(resp);
    }).error(function(resp, options) {
      options.error && options.error(resp)
    })
  }

  BaseModel.prototype.get = function(key) {
    return this.attributes[key];
  }

  BaseModel.prototype.set = function(key, value) {
    this.attributes[key] = value;
  }

  BaseModel.prototype.fetch = function(options) {
    options = options || {};
    if (this.id) {
      $http.get(this.url()).success(function(resp) {
        this.updateAttributes(resp);
        options.success && options.success(resp);
      }.bind(this)).error(function(resp) {
        options.error && options.error(resp);
      })
    } else {
      console.error("Can't call fetch on an unsaved object")
    }

  }

  return ModelFactory;

}])
