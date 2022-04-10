import { MongoClient } from "mongodb";
import { MongoUrl } from "../../helpers/constants";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    // basic backend validation
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const client = await MongoClient.connect(MongoUrl);
    const db = client.db();
    await db.collection("newsletter").insertOne({ email });
    await client.close();

    res.status(201).json({ message: "Signed up!" });
  }
};

export default handler;
