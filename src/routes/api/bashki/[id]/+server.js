import pool from '$lib/server/database.js';

export async function GET({params}) {

    const id = params.id;
    const [rows] = await pool.query('SELECT * from bashki where id=?', [id]);

    if (rows.length == 0) {
        return Response.json({message: 'Bashki not found'}, {status: 404})
    }

    return Response.json(rows[0]);
}