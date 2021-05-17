module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('registry', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([{
      email: 'bell@bell.com',
      password: 'abc123',
      username:'abc123'
    }], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
