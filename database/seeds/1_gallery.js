exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("gallery")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("gallery").insert([
        {
          image_url:
            "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit doloribus ab sed possimus dolores repudiandae reiciendis, ipsa corporis consequuntur unde dolore maxime. Voluptates eveniet molestiae, quos sint temporibus quae quod.",
          user_id: 1
        },
        {
          image_url:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ab. Voluptatem suscipit facilis, nostrum, tempora laboriosam ex culpa est dolor fuga voluptas consectetur a quisquam dicta. Consequuntur ipsam non vel!",
          user_id: 1
        },
        {
          image_url:
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod neque iure culpa mollitia accusantium! Culpa hic, fugit alias sunt delectus non, nostrum reprehenderit commodi, quo dignissimos eum recusandae repellat.",
          user_id: 1
        },
        {
          image_url:
            "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, harum, expedita impedit itaque provident reiciendis, porro quia cum fugiat temporibus cupiditate. Saepe corrupti excepturi minus voluptates magnam dolore, dolorem illo?",
          user_id: 2
        },
        {
          image_url:
            "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis repellendus, quod laborum, magnam laboriosam eius, blanditiis hic suscipit fugit nobis culpa recusandae? Neque asperiores laboriosam reprehenderit, vitae quibusdam dolorum.",
          user_id: 2
        }
      ]);
    });
};
