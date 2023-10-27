import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@/prisma";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main;
    const post = await prisma.post.findFirst({ where: { id } });
    if (!post)
      return NextResponse.json({ message: "not found"}, { status: 500 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
};

export const PUT = async (req: Request, res: NextResponse) => {};

export const DELETE = async (req: Request, res: NextResponse) => {};
