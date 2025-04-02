import { Request, Response } from "express";
import { User } from "./schema";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(200).send({
      message: "created",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("error during registeration");
  }
};
