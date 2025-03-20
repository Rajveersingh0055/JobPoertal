import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running ${process.env.PORT}`);
});

//NOTE TASK

//NOTE create a user scehama with name , email , password, phoneNumber , isActive field only fetch the user who's status is active implement using express.(GET METHOD)
//NOTE Crete a api which update the user status from active to deactive.
//NOTE you have to update isActive key from true to false to deactivate a user (PATCH METHOD)

