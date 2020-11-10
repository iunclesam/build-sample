module.exports = function(grunt) {

    // 初始化配置grunt任务
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'build/js/build.js',
            },
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                files: {
                    'build/js/main.min.js': ['build/js/build.js']
                }
            }
        },
        jshint : {
            options: {
                jshintrc : '.jshintrc' //指定配置文件
            },
            build : ['Gruntfile.js', 'src/js/*.js'] //指定检查的文件
        },
        cssmin:{
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            build: {
                files: {
                    'build/css/output.min.css': ['src/css/*.css']
                }
            }
        },
        watch : {
            scripts : {
                files : ['src/js/*.js', 'src/css/*.css'],
                tasks : ['concat', 'jshint', 'uglify', 'cssmin'],
                options : {spawn : false}
            }
        }
    });

    // grunt任务执行的时候去加载对应的任务插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 注册grunt的默认任务
    grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'cssmin']);
    grunt.registerTask('dev', ['default', 'watch']);

};