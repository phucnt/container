Meteor.methods({
  test() {
    Demo.insert({
      name: 'test'
    });
  }
})
