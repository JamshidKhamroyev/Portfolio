const authLogger = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Token not found!" });
    }
  
    const rawToken = authHeader.split(" ")[1];
    const parts = rawToken.split("14922");
  
    if (parts.length !== 4) {
      return res.status(401).json({ success: false, message: "Token not found!" });
    }
  
    const token = [parts[1], parts[2]].join("14922");
    const [dateStr, key] = token.split("14922");
    const tokenDate = new Date(parseInt(dateStr));
    const currentTime = new Date();
    const oneMinuteAgo = new Date(currentTime.getTime() - 60000);
  
    if (isNaN(tokenDate.getTime()) || tokenDate < oneMinuteAgo) {
      return res.status(401).json({ success: false, message: "Token not found!" });
    }
  
    if (key !== process.env.SECRET_KEY) {
      return res.status(401).json({ success: false, message: "Token not found!" });
    }
  
    next();
  };
  
  module.exports = authLogger;
  