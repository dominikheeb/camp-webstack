module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./src/dist/module.js": ["./modules/index.js"]
                }
            }
        },
        copy: {
            files: {
                cwd: 'src',  // set working folder / root to copy
                src: '**/*',           // copy all files and subfolders
                dest: 'publish',    // destination folder
                expand: true           // required when using cwd
            }
        },
        watch: {
            scripts: {
                files: ["./modules/*.js"],
                tasks: ["browserify"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy")

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
    grunt.registerTask("publish", ["copy"]);
};