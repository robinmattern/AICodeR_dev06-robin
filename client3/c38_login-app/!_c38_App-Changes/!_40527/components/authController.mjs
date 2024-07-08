const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Generate a JWT token
    const token = generateToken(newUser);

    // Return the token and user information
    res.status(201).json({ token, user: { email: newUser.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
