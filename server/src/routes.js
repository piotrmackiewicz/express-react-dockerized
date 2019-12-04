import express from 'express';
const router = express.Router();
import User from './models/User';

router.get('/ping', (_req, res) => {
    return res.status(200).json({ data: 'pong' })
});

router.post('/user', async (req, res) => {
    const user = new User({
        name: req.body.name,
        role: req.body.role,
        age: req.body.age
    });

    try {
        const newUser = await user.save()
        return res.status(201).json(newUser)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

router.get('/user', async (_req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

export default router;