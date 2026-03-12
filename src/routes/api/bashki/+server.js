import pool from '$lib/server/database.js';

export async function GET() {
    const [rows] = await pool.query('SELECT * from bashki');
    return Response.json(rows);
}

export async function POST({request}) {

    const { name, population, area, region, mayor, party, postal_code } = await request.json();

    const [result] = await pool.query('INSERT INTO bashki (name, population, area, region, mayor, party, postal_code) VALUES (?,?,?,?,?,?,?)', [name, population, area, region, mayor, party, postal_code]);

    return Response.json({ "message": "Bashki created"},{ status: 201})


}