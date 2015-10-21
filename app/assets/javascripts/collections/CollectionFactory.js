angular.module('AppTrackerCollections').factory('CollectionFactory', ['$http', function($http) {

  CollectionFactory = {};
  var BaseCollection = CollectionFactory.BaseCollection = function(options) {
    this.model = options.model;
    this.url = options.url;
    this.models = [];
    this.comparator = options.comparator || "id";
  }

  BaseCollection.prototype.fetch = function(options) {
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

    if (this.models.length === 0) {
      this.models.push(model);
    } else {
      var index = this.findInsertIndex(model.get(this.comparator));
      this.models.splice(index, 0, model);
    }
  }

  BaseCollection.prototype.compare = function(c1, c2) {
    if (c1.get(this.comparator) < c2.get(this.comparator)) {
      return -1;
    } else if ( c1.get(this.comparator) === c2.get(this.comparator)) {
      return 0;
    } else {
      return 1
    }
  }

  BaseCollection.prototype.sort = function(callback) {
    callback = callback || this.compare.bind(this);
    this.models.sort(callback);
    return this;
  }

  BaseCollection.prototype.findInsertIndex = function(attribute) {
    var binarySearch = function(arr, target) {
      if (arr.length <= 1) {
        return 0;
      }
      var mid = Math.floor(arr.length / 2)
      if (arr[mid].get(this.comparator) > attribute) {
        return binarySearch(arr.slice(0,mid), attribute);
      }
      else if ( arr[mid].get(this.comparator) === attribute) {
        return mid;
      }
      else {
        return mid + binarySearch(arr.slice(mid), attribute);
      }
    }

    return binarySearch(this.models, attribute) + 1;
  }



  BaseCollection.prototype.find = function(id) {
    for (model in this.models) {
      if (model.id === id) {
        return model;
      }
    }
    return null;
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
