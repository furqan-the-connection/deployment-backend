import { createClient } from "redis";

const redisClient = createClient({
  url: ""
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Redis Connected"));

await redisClient.connect();

export default redisClient;
