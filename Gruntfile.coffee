module.exports = (grunt) ->
  grunt.initConfig
    plg: grunt.file.readJSON("package.json")
    sass:
      build:
        src: "src/scss/*.scss"
        dest: "build/style/style.css"

    slim:
      build:
        src: "src/slim/index.slim"
        dest: "index.html"

    coffee:
      build:
        src: "src/coffee/hoge.coffee"
        dest: "build/script/hoge.js"

    csslint:
      check:
        src: "<%= sass.build.dest>"

    watch:
      files: "src/**/*"
      tasks: [
        "sass"
        "slim"
        "coffee"
        "csslint"
      ]

    connect:
      server:
        options:
          port: 3000

  
  # plugin
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-slim"
  grunt.loadNpmTasks "grunt-contrib-csslint"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-connect"
  
  #tasks
  grunt.registerTask "default", [
    "sass"
    "slim"
    "coffee"
    "csslint"
    "connect"
    "watch"
  ]
  return
