const defaultState = [{
  "url": "alex",
  "name": "Alex Matarasso",
  "score": 0,
  "views": [{
      "time": "2018-06-02T22:15:45+00:00",
      "lname": "John",
      "fname": "Abarham"
  }, {
      "time": "2018-06-03T00:00:48+00:00",
      "lname": "Coffey",
      "fname": "Jeremy"
  }, {
      "time": "2018-06-10T22:07:31+00:00",
      "lname": "Walden",
      "fname": "Mark"
  }, {
      "time": "2018-06-11T23:30:40+00:00",
      "lname": "Doraisamy",
      "fname": "Aravindan",
      "id": "5b11cf0095dc466cf99dcb7c"
  }],
  "averageRating": 5,
  "totalReviews": 1,
  "title": "Freelancer",
  "profile_picture": "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg",
  "address": {
      "city": "Sunnyvale",
      "state": "California",
      "zip_code": "94085",
      "country": "USA"
  },
  "reviews": [{
      "title": "Thanks for Signing Up!",
      "rating": 5,
      "dateCreated": "2018-06-02T22:16:10.000Z"
  }]
}, {
  "url": "kyle",
  "name": "Kyle",
  "score": 0,
  "views": [{
      "time": "2018-06-02T22:15:45+00:00",
      "lname": "Kyle",
      "fname": "Alex"
  }, {
      "time": "2018-06-10T22:07:31+00:00",
      "lname": "Walden",
      "fname": "Mark"
  }],
  "averageRating": 3.5,
  "totalReviews": 2,
  "title": "Freelancer",
  "profile_picture": "https://media.creativemornings.com/uploads/user/avatar/89900/Profile_picture_square.jpg",
  "address": {
      "city": "Santa Clara",
      "state": "California",
      "zip_code": "94085",
      "country": "USA"
  },
  "reviews": [{
      "title": "Thanks for Signing Up!!",
      "rating": 5,
      "dateCreated": "2018-06-02T22:16:10.000Z"
  }, {
      "title": "Horrible.",
      "rating": 1,
      "dateCreated": "2018-06-02T22:16:10.000Z"
  }]
}];

const ProfilesReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SELECT_TOP':
      let profiles = action.profiles.sort((a, b) => parseFloat(a.averageRating) - parseFloat(b.averageRating)).reverse();
      // const profiles = action.profiles.reverse();
      return Object.assign([],state,profiles);
    case 'SELECT_VIEWS':
      let view_profiles = action.payload.sort((a,b) => parseFloat(a.totalReviews) - parseFloat(b.totalReviews)).reverse();
      return Object.assign([],state,view_profiles);
    default:
      return state;
  }
};

export default ProfilesReducer;
