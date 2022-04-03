import fs from "fs";
import path from "path";
import process from "process";

const handler = (req, res) => {
  if (req.method === "POST") {
    const newEntry = {
      id: new Date().toISOString(),
      email: req.body.email,
    };

    const filePath = path.join(process.cwd(), "dummyDB", "DB.json");
    const fileData = JSON.parse(fs.readFileSync(filePath));
    const newFileData = [...fileData, newEntry];
    fs.writeFileSync(filePath, JSON.stringify(newFileData));
    res
      .status(201)
      .json({ message: "Added successfully", createdEntry: newFileData });
  }

  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "dummyDB", "DB.json");
    const fileData = JSON.parse(fs.readFileSync(filePath));

    res.status(200).json(fileData);
  }
};

export default handler;
