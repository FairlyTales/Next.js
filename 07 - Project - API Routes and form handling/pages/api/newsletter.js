const handler = (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    // basic backend validation
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    res.status(201).json({ message: "Signed up!" });
  }
};

export default handler;
