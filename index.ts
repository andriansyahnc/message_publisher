import dotenv from "dotenv";
import createServer from "./src/utils/server";
import router from "./src/routes";
import {logInfo} from "./src/utils/logger";

dotenv.config();

createServer(router).then(server => {
    const { PORT } = process.env;
    server.listen(PORT, () => {
        logInfo(`[server]: Server is running at http://localhost:${PORT}`);
    });
})