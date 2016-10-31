module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      another_example: {
        src: ['../main/packages/*/*.js'],
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: "sample",
          to: "manga"
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.registerTask('default', ['replace']);
};
