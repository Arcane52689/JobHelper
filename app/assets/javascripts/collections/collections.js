angular.module('AppTrackerCollections').factory('Collections',['BaseCollection', 'Blurb', 'Company', 'CoverLetter', 'Profile', 'Application', function(BaseCollection, Blurb, Company, CoverLetter, Profile, Application){
  Collections = {};

  Collections.Blurbs = new BaseCollection({
    model: Blurb,
    url: '/api/blurbs'
  });

  Collections.Companies = new BaseCollection({
    model: Company,
    url: '/api/companies'
  });

  Collections.CoverLetters = new BaseCollection({
    model: CoverLetter,
    url: '/api/cover_letters'
  })

  Collections.Profiles = new BaseCollection({
    model: Profile,
    url: '/api/profiles'
  })

  Collections.Applications = new BaseCollection({
    model: Application,
    url: '/api/applications'
  })





  return Collections;
}])
