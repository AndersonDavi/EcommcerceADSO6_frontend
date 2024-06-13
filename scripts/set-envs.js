const { writeFileSync, mkdirSync } = require("fs");
require("dotenv").config();
const targetPath = "./src/environments/environments.ts";

const envFileContent = `
export const environment = {
  PRODUCTION: "${process.env["MAP_BOX_KEY"]}",
  API_URL: "${process.env["API_URL"]}",
};
`;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent);
