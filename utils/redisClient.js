import { createClient } from "redis";

const redisClient = createClient({
    url: 'redis://default:vFjgfpUxS78g4Idti8VPuZAk2U4tJLPk@redis-12609.c301.ap-south-1-1.ec2.redns.redis-cloud.com:12609'
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Redis Connected"));

await redisClient.connect();

export default redisClient;
