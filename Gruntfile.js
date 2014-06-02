module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      watch: {
        js: {
          files: ['js/*.js'],
          tasks: ['concat']
        },
        css: {
          files: [
                    'css/main.scss', 
                    'css/*/*.scss'
                  ],
          tasks: ['sass']
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
            'js/vendor/*.js',
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