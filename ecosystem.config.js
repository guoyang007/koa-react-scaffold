module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'myApp',
      script    : 'app.js',
      interpreter : 'babel-node',
      max_memory_restart: "1000M",
      env : {
        NODE_ENV: 'production'
      }
    }
  ]
};
