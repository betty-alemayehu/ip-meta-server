/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("jokes").del();
  await knex("hobbies").del();
  await knex("ages").del();
  await knex("moods").del();
  await knex("humor").del();

  // Insert hobbies and get the IDs
  await knex("hobbies").insert([
    { hobby: "Sports & Fitness" },
    { hobby: "Arts & Crafts" },
    { hobby: "Technology & Gaming" },
    { hobby: "Travel & Adventure" },
    { hobby: "Cooking & Food" },
  ]);

  const hobbies = await knex("hobbies").select("id", "hobby");

  // Insert age ranges and get the IDs
  await knex("ages").insert([
    { age: "18-25" },
    { age: "26-35" },
    { age: "36-45" },
    { age: "46-60" },
    { age: "60+" },
  ]);

  const ages = await knex("ages").select("id", "age");

  // Insert moods and get the IDs
  await knex("moods").insert([
    { mood: "Happy" },
    { mood: "Relaxed" },
    { mood: "Energetic" },
    { mood: "Stressed" },
    { mood: "Reflective" },
  ]);

  const moods = await knex("moods").select("id", "mood");

  // Insert humor types and get the IDs
  await knex("humor").insert([
    { humor: "Sarcastic" },
    { humor: "Wholesome" },
    { humor: "Pun-based" },
    { humor: "Witty/Intellectual" },
    { humor: "Slapstick" },
  ]);

  const humor = await knex("humor").select("id", "humor");

  // Destructuring the IDs from the results
  const [sports, arts, tech, travel, cooking] = hobbies.map((h) => h.id);
  const [age18_25, age26_35, age36_45, age46_60, age60Plus] = ages.map(
    (a) => a.id
  );
  const [happy, relaxed, energetic, stressed, reflective] = moods.map(
    (m) => m.id
  );
  const [sarcastic, wholesome, punBased, witty, slapstick] = humor.map(
    (h) => h.id
  );

  // Insert data into the jokes table with correct references
  await knex("jokes").insert([
    {
      hobby_id: sports,
      age_id: age18_25,
      mood_id: happy,
      humor_id: sarcastic,
      joke_text:
        "I told my trainer I wanted to do crunches, but now I only crunch chips.",
    },
    {
      hobby_id: sports,
      age_id: age26_35,
      mood_id: relaxed,
      humor_id: wholesome,
      joke_text: "Exercise is great, but so is napping after yoga.",
    },
    {
      hobby_id: sports,
      age_id: age36_45,
      mood_id: energetic,
      humor_id: punBased,
      joke_text:
        "Why did the soccer player bring string to the game? To tie the score!",
    },
    {
      hobby_id: sports,
      age_id: age46_60,
      mood_id: stressed,
      humor_id: witty,
      joke_text:
        "They say exercise reduces stress. I’m stressed because I have to exercise!",
    },
    {
      hobby_id: sports,
      age_id: age60Plus,
      mood_id: reflective,
      humor_id: slapstick,
      joke_text:
        "I started walking to stay healthy. Then I tripped over the treadmill cord!",
    },
    {
      hobby_id: arts,
      age_id: age18_25,
      mood_id: energetic,
      humor_id: sarcastic,
      joke_text:
        "I tried knitting to relax... now I’m tangled in my own stress.",
    },
    {
      hobby_id: arts,
      age_id: age26_35,
      mood_id: happy,
      humor_id: wholesome,
      joke_text: "Every masterpiece starts with a single stroke of creativity!",
    },
    {
      hobby_id: arts,
      age_id: age36_45,
      mood_id: relaxed,
      humor_id: punBased,
      joke_text:
        "Why was the artist always calm? They knew how to draw their feelings out.",
    },
    {
      hobby_id: arts,
      age_id: age46_60,
      mood_id: stressed,
      humor_id: witty,
      joke_text: "The only thing I create during craft time is a bigger mess.",
    },
    {
      hobby_id: arts,
      age_id: age60Plus,
      mood_id: reflective,
      humor_id: slapstick,
      joke_text:
        "I tried sculpting, but I ended up glued to the floor instead.",
    },
    {
      hobby_id: tech,
      age_id: age18_25,
      mood_id: relaxed,
      humor_id: sarcastic,
      joke_text:
        "Gaming is so relaxing... until you lose to a 12-year-old yelling in your ear.",
    },
    {
      hobby_id: tech,
      age_id: age26_35,
      mood_id: happy,
      humor_id: wholesome,
      joke_text:
        "Gaming brings people together—especially when you're all noobs in a team.",
    },
    {
      hobby_id: tech,
      age_id: age36_45,
      mood_id: energetic,
      humor_id: punBased,
      joke_text:
        "Why don’t computers play hide and seek? They always get caught in the cache!",
    },
    {
      hobby_id: tech,
      age_id: age46_60,
      mood_id: stressed,
      humor_id: witty,
      joke_text:
        "Every tech issue has two solutions: reboot or blame the Wi-Fi.",
    },
    {
      hobby_id: tech,
      age_id: age60Plus,
      mood_id: reflective,
      humor_id: slapstick,
      joke_text:
        "I tried VR gaming but ended up walking into a wall. Realism at its best!",
    },
    {
      hobby_id: travel,
      age_id: age18_25,
      mood_id: energetic,
      humor_id: sarcastic,
      joke_text:
        "Backpacking is great—until you realize your bag is heavier than your ambition.",
    },
    {
      hobby_id: travel,
      age_id: age26_35,
      mood_id: happy,
      humor_id: wholesome,
      joke_text:
        "Every journey begins with a single step... and a suitcase full of snacks.",
    },
    {
      hobby_id: travel,
      age_id: age36_45,
      mood_id: relaxed,
      humor_id: punBased,
      joke_text: "Why don’t mountains ever get tired? They’re always peaking!",
    },
    {
      hobby_id: travel,
      age_id: age46_60,
      mood_id: stressed,
      humor_id: witty,
      joke_text:
        "Travel stress: When your vacation feels like a full-time job.",
    },
    {
      hobby_id: travel,
      age_id: age60Plus,
      mood_id: reflective,
      humor_id: slapstick,
      joke_text:
        "I went zip-lining, and now I can’t zip my jacket. Adventure is rough!",
    },
    {
      hobby_id: cooking,
      age_id: age18_25,
      mood_id: relaxed,
      humor_id: sarcastic,
      joke_text:
        "Cooking is fun—until you realize you forgot half the ingredients.",
    },
    {
      hobby_id: cooking,
      age_id: age26_35,
      mood_id: happy,
      humor_id: wholesome,
      joke_text: "A home-cooked meal is love made edible!",
    },
    {
      hobby_id: cooking,
      age_id: age36_45,
      mood_id: energetic,
      humor_id: punBased,
      joke_text:
        "Why did the chef break up with their partner? They just couldn’t make thyme!",
    },
    {
      hobby_id: cooking,
      age_id: age46_60,
      mood_id: stressed,
      humor_id: witty,
      joke_text: "I cook with wine. Sometimes it even goes into the food!",
    },
    {
      hobby_id: cooking,
      age_id: age60Plus,
      mood_id: reflective,
      humor_id: slapstick,
      joke_text:
        "I tried flipping a pancake but ended up flipping the whole pan instead.",
    },
  ]);
}
