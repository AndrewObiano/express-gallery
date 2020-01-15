exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("gallery")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("gallery").insert([
        {
          image_url:
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "Acai bowls look like ice cream, almost taste like ice cream, and make you feel good about your breakfast choice. It's what breakfast dreams are made of. An acai bowl is basically a really thick smoothie that's been topped with oatmeal, fruit or peanut butter, and then you wolf it down with a spoon. For breakfast. After eating a bowl, you will not only feel happily full (for hours) and have satisfied a sweet craving (no need to cave for a donut), you'll have also done something that was good for you. Win win.",
          user_id: 1
        },
        {
          image_url:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "A pancake (or hotcake, griddlecake, or flapjack, not to be confused with oat bar flapjacks) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. Archaeological evidence suggests that pancakes were probably the earliest and most widespread cereal food eaten in prehistoric societies.",
          user_id: 1
        },
        {
          image_url:
            "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "Burritos are filled with a savory filling, most often a meat such as chicken, beef, or pork, and often include a large array of other ingredients such as rice, cooked beans (either whole or refried), vegetables such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole or crema.",
          user_id: 1
        },
        {
          image_url:
            "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Both dried and fresh pastas come in a number of shapes and varieties, with 310 specific forms known by over 1300 documented names.[4] In Italy, the names of specific pasta shapes or types often vary by locale. For example, the pasta form cavatelli is known by 28 different names depending upon the town and region. Common forms of pasta include long and short shapes, tubes, flat shapes or sheets, miniature shapes for soup, those meant to be filled or stuffed, and specialty or decorative shapes.",
          user_id: 2
        },
        {
          image_url:
            "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "French fries are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly appear on the menus of diners, fast food restaurants, pubs, and bars. They are usually salted and, depending on the country, may be served with ketchup, vinegar, mayonnaise, tomato sauce, or other local specialties. Fries can be topped more heavily, as in the dishes of poutine or chili cheese fries. Chips can be made from kumara or other sweet potatoes instead of potatoes. A baked variant, oven chips, uses less oil or no oil.[3] One very common fast food dish is fish and chips.",
          user_id: 2
        },
        {
          image_url:
            "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "A steak (/ˈsteɪk/) is a meat generally sliced across the muscle fibers, potentially including a bone. Exceptions, in which the meat is sliced parallel to the fibers, include the skirt steak cut from the plate, the flank steak cut from the abdominal muscles, and the silverfinger steak cut from the loin and includes three rib bones. In a larger sense, fish steaks, ground meat steaks, pork steak, and many more varieties of steak are known.",
          user_id: 1
        },
        {
          image_url:
            "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "Avocado toast is a type of open sandwich or toast made with mashed avocado and salt, pepper, and citrus juice on toast. Potential additional ingredients that enhance the flavor are olive oil, hummus, red pepper flakes, feta, dukkah, tomato, and many other toppings.",
          user_id: 2
        }
      ]);
    });
};
