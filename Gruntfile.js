module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      watch: {
         options: {
          livereload: true,
        },

        html: {
          files: ['*.html']
        },

        css: {
          files: [
                    'css/main.scss', 
                    'css/*/*.scss'
                  ],
          tasks: ['sass']
        },

        js: {
          files: ['js/*.js'],
          tasks: ['concat']
        }
      },

      sass: {
        dist: {
          options: {
            style: 'expanded'
          },

          files: {                         
            'css/build/production.css': 'css/main.scss'
          }
        }
      },

      concat: {
        dist: {
          src: [
            'js/vendor/jquery-2.1.1.min.js',
            'js/vendor/bootstrap-3.1.1.min.js',
            'js/*.js'
          ],

          dest: 'js/build/production.js'
        }
      }
    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Register Tasks
    grunt.registerTask('default', ['concat', 'sass', 'watch']);

  };