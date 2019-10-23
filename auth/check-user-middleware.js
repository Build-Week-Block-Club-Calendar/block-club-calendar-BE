// Complete

module.exports = userId => {
    return (req, res, next) => {
        console.log(userId);
        console.log('user:', req.user);
        console.log(req.user.id);
        if (userId === req.user.id) {
            next();
        } else {
            res.status(403).json({ message: 'Access denied.' });
        };
    };
};