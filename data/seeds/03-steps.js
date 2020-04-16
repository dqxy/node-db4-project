exports.seed = function(knex) {
    return knex("steps").insert([
        {
            recipe_id: 1,
            step_number: 1,
            instructions: "solve prime number theory",
        },
        { recipe_id: 1, step_number: 2, instructions: "crack cyber security" },
        {
            recipe_id: 1,
            step_number: 3,
            instructions: "blackmail world leaders",
        },
        {
            recipe_id: 2,
            step_number: 1,
            instructions: "collect all the sheep in Scotland",
        },
        { recipe_id: 2, step_number: 4, instructions: "profit" },
        {
            recipe_id: 2,
            step_number: 2,
            instructions: "find Japanese investors",
        },
        { recipe_id: 2, step_number: 3, instructions: "????" },
    ]);
};
