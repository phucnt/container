// NOTE: create mongo collection
Demo = new Mongo.Collection('Demo');

//XXX: assign mongo to package Collection2
Collections.Demo = Demo;

// create schema
const Schema = new SimpleSchema({
  name: {
    type: String,
    trim: true,
  }
});

// attach schema to collection mongo
Demo.attachSchema(Schema);
