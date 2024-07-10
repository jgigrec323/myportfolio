import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const username = "jeangalanty@gmail.com";
  const password = "Jgigrec323_";
  const { selectedService } = request.body;

  console.log(request.body);

  return NextResponse.json(username);

  /*  const transporter = nodemailer.createTransport({
                                   service:"gmail",
                                   host:"stmp.gmail.com"
                                 }) */
}
