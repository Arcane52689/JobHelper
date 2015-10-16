angular.module('BaseModel', ['$http',function($http) {

  function modelInherits(child, parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
  }

  function BaseModel(data) {
    this.initialize(data);
  }

  BaseModel.prototype.initialize = function(data) {
    this.attributes = {};
    for key in data {
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

  BaseModel.url = function() {
    return "";
  }

  BaseModel.prototype.data = function() {
    return  this.attributes
  }

  BaseModel.save = function(options) {
    if (this.isNew()) {
      this.create(options);
    } else {
      this.update(options);
    }
  }


  BaseModel.create = function(options) {
    $http.post(this.url(), this.attributes).success(function(resp, options) {
      options.success && options.success(resp);
    }).error(function(resp, options) {
      options.error && options.error(resp);
    })
  }

  BaseModel.update = function(options) {
    $http.put(this.url(), this.attributes).success(function(resp, options) {
      options.success && options.success(resp);
    }).error(function(resp, options) {
      options.error && options.error(resp, options)
    })
  }

  BaseModel.prototype.parentOf = function(child) {
    modelInherits(child, BaseModel)
  }

  return BaseModel;

}])
