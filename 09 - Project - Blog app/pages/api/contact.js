import { MongoClient } from "mongodb";

const MongoUrl =
  "mongodb+srv://admin:admin@cluster0.cfjsv.mongodb.net/emails?retryWrites=true&w=majority";

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
