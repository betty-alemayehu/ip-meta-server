import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { age, humor, mood, hobby } = req.query; // Destructure query parameters

    const hasQuery =
      age &&
      humor &&
      mood &&
      hobby &&
      age.trim() !== "" &&
      humor.trim() !== "" &&
      mood.trim() !== "" &&
      hobby.trim() !== "";

    let jokes;
    if (hasQuery) {
      jokes = await knex("jokes")
        .join("ages", "ages.id", "jokes.age_id")
        .join("hobbies", "hobbies.id", "jokes.hobby_id")
        .join("humor", "humor.id", "jokes.humor_id")
        .join("moods", "moods.id", "jokes.mood_id")
        .select(
          "jokes.id",
          "jokes.joke_text", // Correct column name
          "age",
          "hobby",
          "humor",
          "mood"
        )
        .where("hobby", hobby)
        .where("humor", humor)
        .where("age", age)
        .where("mood", mood);
    } else {
      jokes = await knex("jokes")
        .join("ages", "ages.id", "jokes.age_id")
        .join("hobbies", "hobbies.id", "jokes.hobby_id")
        .join("humor", "humor.id", "jokes.humor_id")
        .join("moods", "moods.id", "jokes.mood_id")
        .select(
          "jokes.id",
          "jokes.joke_text", // Correct column name
          "age",
          "hobby",
          "humor",
          "mood"
        );
    }

    if (jokes.length === 0) {
      return res.status(404).json({
        message: `jokes not found`,
      });
    }

    const sendData = hasQuery
      ? jokes[Math.floor(Math.random() * jokes.length)]
      : jokes;
    res.status(200).json(sendData);
  } catch (error) {
    res.status(500).json({
      message: `Could not retrieve joke data`,
    });
  }
});

export default router;
