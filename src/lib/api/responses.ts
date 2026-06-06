import { NextResponse } from "next/server";

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

export function jsonSuccess<T extends Record<string, unknown>>(data?: T) {
  return NextResponse.json({ success: true, ...data });
}
