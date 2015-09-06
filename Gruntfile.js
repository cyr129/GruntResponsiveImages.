
var mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt) {
grunt.initConfig({
  responsive_images: {
    dev: {
      options: {engine:'im'},
      sizes: [{
        width: 320,
        height: 240
      },{
        name: 'image1',
        width: 640
      },{
        name: "image1",
        width: 1024,
        suffix: "_x2",
        quality: 0.6
      }],
      files: [{
        expand: true,
        src: ['*.{jpg,gif,png}'],
        cwd: 'src/',
        dest: 'Images/'
      }]
    }
  },
  copy: {
    dev: {
      files: [{
        expand: true,
        src: ['**/*', '!app/img/**/*.*'],
        cwd: 'src/',
        dest: 'Images/'
      }]
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-responsive-images');
grunt.registerTask('default', ['copy','responsive_images']);
};
