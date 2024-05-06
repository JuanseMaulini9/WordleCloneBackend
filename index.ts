import dotenv from "dotenv";
import server from "./src/server";

dotenv.config();

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${PORT}`);
});
