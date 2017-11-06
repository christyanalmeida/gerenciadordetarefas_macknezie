


 

  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('build', ['clean', 'requirejs', 'less']);
  grunt.registerTask('default', ['less','watch']);
  grunt.registerTask('server', ['less','watch', 'connect']);

};
