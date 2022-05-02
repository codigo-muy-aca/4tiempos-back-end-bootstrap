const registerRoutes = require('../utils/registerRoutes');

module.exports = registerRoutes(router => {
  router.get('/', (req, res) => {
    res.send('Hola');
  });
});
