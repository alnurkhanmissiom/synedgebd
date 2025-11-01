import { db } from '@/drizzle';
import { contactSchema } from '@/drizzle/schema';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const contact = await db.select().from(contactSchema);
  return new Response(JSON.stringify(contact), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const newContact = await request.json();
  await db.insert(contactSchema).values(newContact);
  return new Response(null, { status: 201 });
};
