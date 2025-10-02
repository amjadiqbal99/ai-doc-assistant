import { Request, Response, NextFunction } from 'express';

const rateLimit = (limit: number, windowMs: number) => {
    const requests: { [key: string]: number } = {};

    return (req: Request, res: Response, next: NextFunction) => {
        const key = req.ip; // Use IP address as the key
        const currentTime = Date.now();

        if (!requests[key]) {
            requests[key] = 1;
        } else {
            requests[key]++;
        }

        // Reset the count after the window has passed
        if (currentTime - (windowMs * 1000) > requests[key]) {
            requests[key] = 1;
        }

        if (requests[key] > limit) {
            return res.status(429).json({ message: 'Too many requests, please try again later.' });
        }

        next();
    };
};

export default rateLimit;