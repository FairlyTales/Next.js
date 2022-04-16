import { MongoClient } from "mongodb";

// at the time you read this code these credentials no longer work
const MongoUrl =
  `mongodb+srv://${process.env.db_user}:${process.env.db_password}@${process.env.db_cluster}.cfjsv.mongodb.net/${process.env.db_database}?retryWrites=true&w=majority`;

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(MongoUrl);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;

      res.status(201).json({ message: "Successfully stored message!" });
      await client.close();
    } catch (error) {
      await client.close();
      res.status(500).json({ message: "Storing message failed!" });
    }
  }
};

export default handler;
