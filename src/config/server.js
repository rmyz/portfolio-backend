const {
  LOG,
  PORT = 8080,
} = process.env;

const serverConfig = {
  log: LOG,
  port: PORT,
};

export default serverConfig;