const handler = (req, res) => {
  const id = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    // validation
    if (!email || !name || !text) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const comment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: "Comment added", comment });
  }

  if (req.method === "GET") {
    const comments = [
      {
        id: "1",
        name: "lol",
        text: "kek",
        email: "cheburek@email.com",
      },
    ];
    res.status(200).json({ comments });
  }
};

export default handler;
