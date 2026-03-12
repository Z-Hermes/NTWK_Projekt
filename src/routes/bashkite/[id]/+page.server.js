import pool from '$lib/server/database.js';

export async function load ({ params }) {

    const bashkiId = params.id;

    const [rows] = await pool.execute('SELECT * from bashki WHERE id= ?', [bashkiId]);

    if  (rows.length === 0) {
            error(404, 'bashki not found');
    }

    return {
        event: rows[0]
    }
}