Meteor.publishComposite('test', function() {
  return {
    find() {
      return Demo.find({});
    }, children: [{
      find() {
        return Counts.publish(this, 'test', Demo.find());
      }
    }]
  }
});
