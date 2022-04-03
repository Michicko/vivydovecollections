const app = require('./app');
require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');

const db = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

async function main() {
  await mongoose.connect(db);
  console.log('Server connected to database successfully!!');
}

main().catch(err => console.log(err));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
