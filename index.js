const { app } = require("./server");
const dotenv = require('dotenv');

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
