import express from 'express';
const router = express.Router();
import User from './models/User';

router.get('/ping', (_req, res) => {
    res.status(200).json({ data: 'pong' })
});

router.post('/user', async (req, res) => {
    const user = new User({
        name: req.body.name,
        role: req.body.role,
        age: req.body.age
    });

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.get('/user', async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    return res.status(200).send(users)
})

export default router;