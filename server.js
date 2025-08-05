const app = require("./app");
const PORT = process.env.PORT || 5003;

if(process.env.APP_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
}