// Complete

module.exports = role => {
    return (req, res, next) => {
        console.log(role);
        console.log(req.user);
        console.log(req.user.role);
        if (role === req.user.role) {
            next();
        } else {
            res.status(403).json({ message: 'Access denied.' });
        };
    };
};