exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Andrew",
          password:
            "$2a$12$JP4WYKDfzB8/iwgEyhArvuMAZk.JWici4TZJPB6/xCsl0Tj2v//JG"
        },
        {
          username: "Brian",
          password:
            "$2a$12$MLL5Rf8c2lOHw/bJ6Y.V2.sdAC05tRqQfjV4sEjOPFCjArAk9a1.2"
        }
      ]);
    });
};
