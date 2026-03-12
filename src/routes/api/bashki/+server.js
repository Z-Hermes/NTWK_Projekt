import pool from '$lib/server/database.js';

export async function GET() {
    const [rows] = await pool.query('SELECT * from bashki');
    return Response.json(rows);
}

export async function POST({ request }) {
    if (!checkAuth(request)) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, population, area, region, mayor, party, postal_code } = await request.json();
    const [result] = await pool.query(
        'INSERT INTO bashki (name, population, area, region, mayor, party, postal_code ) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, population, area, region, mayor, party, postal_code]
    );

    return Response.json({ id: result.insertId, title, date }, { status: 201 });
}

import { API_USER, API_PASS } from '$env/static/private';

function checkAuth(request) {
    const auth = request.headers.get('Authorization');

    if (!auth?.startsWith('Basic ')) return false;

    const base64 = auth.slice(6);
    const decoded = atob(base64);

    const [user, pass] = decoded.split(':');

    return user === API_USER && pass === API_PASS;
}