
exports.seed = function(knex) {
    return knex('ingred').insert([   
      { ingred_name: 'Sauce', qty: 5, recipe_id: 1 },
      { ingred_name: 'Garlic', qty: 2, recipe_id: 1 },
      { ingred_name: 'Flour', qty: 2, recipe_id: 2 },
      { ingred_name: 'Eggs', qty: 2, recipe_id: 2 }
    ]);
  };
  