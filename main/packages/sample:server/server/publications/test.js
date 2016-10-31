Meteor.publishComposite('test', function() {
  return {
    find: () => {
      return Demo.find({});
    },
    children: [{
      find: () => {
         Counts.publish(this, 'test', Demo.find({}));
         return null;
      }
    }]
  }
});
