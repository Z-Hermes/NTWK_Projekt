import pool from '$lib/server/database.js';

export async function GET() {
    const [rows] = await pool.query('SELECT * from bashki');
    return Response.json(rows);
}
