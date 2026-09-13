export const rateLimit = ({ windowMs, max }) => {
  const requests = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const key = req.ip || req.socket.remoteAddress;
    const record = requests.get(key) || { count: 0, resetAt: now + windowMs };

    if (now > record.resetAt) {
      record.count = 0;
      record.resetAt = now + windowMs;
    }

    record.count += 1;
    requests.set(key, record);

    if (record.count > max) {
      return res.status(429).json({ message: "Too many requests. Please try again later." });
    }

    return next();
  };
};
