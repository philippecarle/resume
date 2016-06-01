module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                strict: false,
                validthis: true
            },
            files: {
                src: [
                    "GruntFile.js",
                    "app/**/*.js"
                ]
            }
        },
        watch: {
            js: {
                files: "app/**/*​.js",
                tasks: ['jshint'],
                options: {
                    livereload: true,
                    reload: true,
                    interrupt: true
                }
            },
            css: {
                files: "assets/css/**/*.css",
                tasks: ['jshint'],
                options: {
                    livereload: true,
                    reload: true,
                    interrupt: true
                }
            },
            html: {
                files: ["index.html", "app/**/*.html"],
                options: {
                    livereload: true,
                    reload: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/css/json.css': 'assets/css/json.scss'
                }
            }
        },
        wiredep: {
            html: {
                src: ["index.html"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('default', ['jshint', 'concat']);
    grunt.registerTask('dev', ['sass', 'wiredep', 'watch']);
};
