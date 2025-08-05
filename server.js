const app = require("./app");
const PORT = process.env.PORT || 5003;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});


if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
}