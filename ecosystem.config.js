module.exports = {
  apps : [{
    name: 'tegger-web-app',
    script: 'serve',
    interpreter: 'none',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '-s build -l 3000',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '34.226.93.121',
      ref  : 'origin/master',
      repo : 'git@github.com:TeggerDLT/tegger-newFront.git',
      path : '/Users/joseavalos/PhpstormProjects/tegger-react',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
