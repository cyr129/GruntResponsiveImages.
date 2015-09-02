var mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt) {
grunt.initConfig({
  imagemin: {                          // Task
    static: {                          // Target
      options: {                       // Target options
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg()]
      },
      files: {                         // Dictionary of files
        'Images/image1.png': 'src/image1.png' // 'destination': 'source'
      }
    },
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'Images/'                  // Destination path prefix
      }]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);
};
