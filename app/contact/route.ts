import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect("https://cfcindia.com/locate-us", 308);
}
