import { NextResponse } from "next/server";
import fastkart from './fastkart.json';

export async function GET() {
    return NextResponse.json(fastkart)
}