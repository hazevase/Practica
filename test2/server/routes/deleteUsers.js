const router = require("express").Router();
const { User } = require("../models/user");


router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await User.findByIdAndDelete(user);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
