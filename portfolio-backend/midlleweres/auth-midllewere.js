const authLogger = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ succes: false, message: "Token not found!"})
    }

    const token = authHeader.split(' ')[1];
    if(token === process.env.SECRET_KEY){
        next();
    }else {
        return res.status(401).json({ succes: false, message: "Token not found!"})
    }
};

module.exports = authLogger;