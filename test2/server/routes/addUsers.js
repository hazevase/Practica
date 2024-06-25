const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");


router.post('/', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
