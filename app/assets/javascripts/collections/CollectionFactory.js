angular.module('AppTrackerCollections').factory('CollectionFactory', ['$http', function($http) {

  CollectionFactory = {};
  var BaseCollection = CollectionFactory.BaseCollection = function(options) {
    this.model = options.model;
    this.url = options.url;
    this.models = [];
    this.comparator = options.comparator || "id";
    this.reverse = false;
  }

  BaseCollection.prototype.fetch = function(options) {
    options = options || {};
    $http.get(this.url).success(function(resp) {
      this.addModels(resp);
      options.success && options.success(resp)
    }.bind(this)).error(function(resp) {
      console.error(resp);
      options.error && options.error(resp);
    })
  }

  BaseCollection.prototype.addModels = function(dataArr) {
    dataArr.forEach(this.addModel.bind(this));
  }

  BaseCollection.prototype.addModel = function(data) {
    var model = new this.model(data);
    this.add(model);
  }

  BaseCollection.prototype.each = function(callback) {
    for (model in this.models) {
      callback(model);
    }
    return this;
  }

  BaseCollection.prototype.add = function(model) {
    this.models.push(model);
    this.sort();
  }

  BaseCollection.prototype.reverseOrder = function() {
    this.reverse = this.reverse ? false : true;
    return this;
  }



  BaseCollection.prototype.compare = function(c1, c2) {
    var attribute1 = c1.get(this.comparator);
    var attribute2 = c2.get(this.comparator);
    if (typeof attribute1 === 'string') {
      attribute1 = attribute1.toLowerCase();
      attribute2 = attribute2.toLowerCase();
    }
    if (attribute1 < attribute2) {
      return (!this.reverse) ? -1 : 1;
    } else if ( attribute1 === attribute2) {
      return 0;
    } else {
      return (!this.reverse) ? 1 : -1;
    }
  }

  BaseCollection.prototype.sort = function(callback) {
    callback = callback || this.compare.bind(this);
    this.models.sort(callback);
    return this;
  }






  BaseCollection.prototype.find = function(id) {

    this.models.forEach(function(model) {
      if (model.id === id) {
        result = model;

      }
    })
    return result;
  }

  BaseCollection.prototype.where = function(callback) {
    var result = new BaseCollection({
      model: this.model,
      url: undefined,
      comparator: this.comparator
    })

    this.models.forEach(function(model) {
      if (callback(model)) {
        result.add(model);
      }
    })
    return result;
  }

  BaseCollection.prototype.all = function() {
    return this.models;
  }

  return CollectionFactory;

}])
