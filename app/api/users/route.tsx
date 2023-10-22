import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

export function GET(request: NextRequest) {
  // fetch users from a DB
  return NextResponse.json([
    { id: 1, name: 'Mosh' },
    { id: 1, name: 'John' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // Validate
  // If invalid, return 400
  // Else, return data that was created
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
