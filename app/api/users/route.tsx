import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  // fetch users from a DB
  return NextResponse.json([
    { id: 1, name: 'Mosh' },
    { id: 1, name: 'John' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // If invalid, return 400
  // Else, return data that was created
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
