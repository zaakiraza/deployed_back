const app = require("./app");
const PORT = process.env.APP_PORT || 5003;

if(process.env.APP_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
}