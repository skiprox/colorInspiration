module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    browserify: {
      client: {
        options: {
          debug: true
        },
        files:[{
          expand: true,
          cwd: 'examples/src/',
          src: ['*.js'],
          dest: './examples/js/',
          ext: '.js'
        }]
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['browserify']);

};
