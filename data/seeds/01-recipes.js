
exports.seed = function(knex) {
    return knex('recipes').insert([   
      { recipe_name: 'Pasta'},
      { recipe_name: 'Baklava'}
    ]);
  };
  