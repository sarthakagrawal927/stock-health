import {
  connectDatabase,
  makeProfile,
  getProfile,
  updateStocks,
} from "../../helpers/db-util";

import { getSession } from "next-auth/client";

async function handler(req, res) {
  let client;
  const session = await getSession({
    req,
  });

  if (!session) {
    res.send({
      error: "You must be signed in",
    });
  }

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({
      message: "Connecting to the database failed!",
    });
    return;
  }

  let userTest = await getProfile(client, "users", {
    email: session.user.email,
  });

  if (req.method === "POST") {
    const { stocks } = req.body;
    let result;

    if (!userTest) {
      const user = {
        email: session.user.email,
        stocks: stocks,
      };

      try {
        result = await makeProfile(client, "users", user);
        user._id = result.insertedId;
        res.status(201).json({
          message: "Added Info",
        });
        // console.log("success saved");
      } catch (error) {
        // console.log(error.message);
        res.status(500).json({
          message: "Insertion failed",
        });
      }
    } else {
      try {
        result = await updateStocks(
          client,
          "users",
          stocks,
          session.user.email,
        );
        res.status(201).json({
          message: "Update",
        });
      } catch (error) {
        res.status(500).json({
          message: "Update failed",
        });
      }
    }
  }

  if (req.method === "GET") {
    if (!userTest) {
      res.status(404).json({
        message: "Error",
      });
    }
    res.status(200).json({
      user: userTest,
    });
  }
  client.close();
}

export default handler;
