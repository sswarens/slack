Meteor.startup(function () {
  smtp = {
    username: 'konekonotenshi@gmail.com',
    password: 'bjLFxhBG9BPbdWykpzCIzA',
    server:   'smtp.mandrillapp.com',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});