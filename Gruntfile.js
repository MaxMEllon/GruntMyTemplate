module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'dest/samples.js': ['src/sample.coffee']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.registerTask('default', 'coffee')
}
