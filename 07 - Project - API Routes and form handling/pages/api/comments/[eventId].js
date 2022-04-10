import { MongoClient } from "mongodb";
import { MongoUrl } from "../../../helpers/constants";

const handler = async (req, res) => {
  const eventId = req.query.eventId;
  let client, collection;

  try {
    client = await MongoClient.connect(MongoUrl);
    collection = client.db().collection("comments");
  } catch (err) {
    res.status(500).json({ message: "DB connection error" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    // validation
    if (!email || !name || !text) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const comment = {
      eventId,
      name,
      email,
      text,
    };

    try {
      const dbRes = await collection.insertOne(comment);
      comment.id = dbRes.insertedId;

      res.status(201).json({ message: "Comment added", comment });
			await client.close();
    } catch (err) {
      res
        .status(500)
        .json({ message: "Internal server error, comment not added" });
    }
  }

  if (req.method === "GET") {
    try {
      const comments = await collection.find().sort({ _id: -1 }).toArray();

      res.status(200).json({ comments });
			await client.close();
    } catch (err) {
      res
        .status(500)
        .json({ message: "Internal server error, comment not added" });
    }
  }
};

export default handler;
