var Magento = require('../magento');

if (!process.env.MAGENTO_HOST) throw new Error('Host not present in environment variable MAGENTO_HOST');
if (!process.env.MAGENTO_USER) throw new Error('Username not present in environment variable MAGENTO_USER');
if (!process.env.MAGENTO_PASS) throw new Error('Password not present in environment variable MAGENTO_PASS');

var magento = new Magento({
  host: process.env.MAGENTO_HOST,
  port: 80,
  path: '/api/xmlrpc/',
  login: process.env.MAGENTO_USER,
  pass: process.env.MAGENTO_PASS
});


console.log('Testing login');
magento.login(function(err, sessionId) {
  if (err) throw err;

  console.log(sessionId);

  console.log('Changing session id and trying');
  magento.login(function(err, newSessionId) {
    if (err) throw err;

    magento.changeSession(sessionId);
    console.log('Changed session from %s to %s', newSessionId , sessionId);

    magento.directoryCountry.list(function(err, countries) {
      if (err) throw err;
      console.log('Found %d countries', countries.length);
    });
  });
});
