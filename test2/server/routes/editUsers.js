const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");


router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Пользователь не найден' });

        user.email = req.body.email;
        user.password = req.body.password;
        user.role = req.body.role;


        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            user.password = hashedPassword;
        }

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
