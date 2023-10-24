import prisma from "@/prisma";
import { NextResponse } from "next/server";

async function main() {
    try {
        await prisma.$connect();
    } catch (err) {
        return Error;
        ("database connection failed");
    }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const posts = await prisma.post.findMany();
  } catch (err) {
    return NextResponse.json({message:"Error",err}, {status:500});
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  console.log("POST");
};
