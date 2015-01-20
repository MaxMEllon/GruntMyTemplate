module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      build: {
        src: "src/scss/*.scss",
        dest: 'build/style/style.css'
      }
    },
    slim: {
      build: {
      }
    },
    coffee: {
      build: {
        // files: {
        //   // 'src/coffee/*.coffee': 'src/coffee/*.coffee'
        // }
      }
    },
    csslint: {
      check: {
        src: '<%= sass.build.dest>'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-slim')
  grunt.loadNpmTasks('grunt-contrib-csslint')
  grunt.registerTask('default', ['sass', 'csslint'])
}
