import { connectMongoDB } from "./db/connectMongoDB.js";
import { User } from "./models/user.js";
import 'dotenv/config';

const run = async () => {
  try {

await connectMongoDB();

const user = await User.create({
  email: 'lola@mail.com',
  password: '12345678',
});

  const cleanUser = user.toJSON();

  console.log(user);
  console.log(cleanUser);


} catch (error) {
  console.log("Error:", error.message);
}
};

run();

