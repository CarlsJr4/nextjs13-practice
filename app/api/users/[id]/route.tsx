import { NextRequest, NextResponse } from 'next/server';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: 'Mosh' });
  // Fetch data from a DB
  // If not found, return 404 error
  // Else return data
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the request body
  // If invalid, return 400
  // Otherwise, fetch user with given ID
  // If doesn't exist, return 404 error
  // Otherwise, update the user
  // Return the updated user
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch user from DB
  // If not found, return 404
  // Delete user
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({});
}
