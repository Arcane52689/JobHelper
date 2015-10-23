angular.module('AppTrackerCollections').factory('CollectionFactory', ['$http', function($http) {

  CollectionFactory = {};
  var BaseCollection = CollectionFactory.BaseCollection = function(options) {
    this.model = options.model;
    this.url = options.url;
    this.models = [];
    this.modelsById = {};
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
    this.adding = true;
    dataArr.forEach(this.addModel.bind(this));
    this.adding = false
    this.sort();
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
    if (model.id) {
      if (this.modelsById[model.id]) {
        this.modelsById[model.id].updateAttributes(model.attributes);
      } else {
        this.modelsById[model.id] = model;
        this.models.push(model);
      }
    } else {
      this.models.push(model)
    }
    if (!this.adding) {
      this.sort();
    }
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
    return this.modelsById[id];
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
  // returns the first n items in the collection. if no number is passed, it returns the first item
  BaseCollection.prototype.first = function(n) {
    n = n || 1;
    return this.models.splice(0, n);
  }

  return CollectionFactory;

}])

angular.module('AppTrackerCollections').factory('Collections',['CollectionFactory', 'Blurb', 'Company', 'CoverLetter', 'Profile', function(CollectionFactory, Blurb, Company, CoverLetter, Profile){
  Collections = {};

  Collections.Blurbs = new CollectionFactory.BaseCollection({
    model: Blurb,
    url: '/api/blurbs'
  });

  Collections.Companies = new CollectionFactory.BaseCollection({
    model: Company,
    url: '/api/companies'
  });

  Collections.CoverLetters = new CollectionFactory.BaseCollection({
    model: CoverLetter,
    url: '/api/cover_letters'
  })

  Collections.Profiles = new CollectionFactory.BaseCollection({
    model: Profile,
    url: '/api/profiles'
  })





  return Collections;
}])
