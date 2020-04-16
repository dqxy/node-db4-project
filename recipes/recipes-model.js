const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  findById,
  getInstructions,
  getShoppingList,
  add,
  update,
  remove,
};

// implementation details
function getRecipes() {
  return db("recipes");
}

// implement a method to find a user by id
function findById(id) {
  return db("recipes").where({ id }).first();
}

function getInstructions(id) {
    return db('steps as s')
      .join('recipes as sc', 'sc.id', 's.recipe_id')
      .select('sc.recipe_name', 's.instructions', 's.step_number')
      .where('sc.id', id)
      .orderBy('s.step_number');
  }

  function getShoppingList(id) {
    return db('ingred as i')
      .join('recipes as r', 'r.id', 'i.recipe_id')
      .select('r.recipe_name', 'i.ingred_name', 'i.qty')
      .where('r.id', id)
      .orderBy('i.ingred_name');
  }

function add(recipe_name) {
  return db("recipes")
    .insert(recipe_name, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db("recipes")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
    return db("recipes").where({ id }).del();
  }
