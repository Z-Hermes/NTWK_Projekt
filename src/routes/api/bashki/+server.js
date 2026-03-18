import pool from '$lib/server/database.js';

//Function to get all bashki
export async function GET() {
    const [rows] = await pool.query('SELECT * from bashki');
    return Response.json(rows);
}

//Function to add a new bashki
export async function POST({ request }) {
    if (!checkAuth(request)) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, population, area, region, mayor, party, postal_code } = await request.json();
    const [result] = await pool.query(
        'INSERT INTO bashki (name, population, area, region, mayor, party, postal_code ) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, population, area, region, mayor, party, postal_code]
    );

    return Response.json({ id: result.insertId, name, population, area, region, mayor, party, postal_code }, { status: 201 });
}

// get the username & password for the API
import { API_USER, API_PASS } from '$env/static/private';

function checkAuth(request) {
    const auth = request.headers.get('Authorization');

    // if the auth doesnt start with "Basic " then it is invalid
    if (!auth?.startsWith('Basic ')) return false;

    // we get rid of the "Basic ". The 6 stands for the 6 elements("Basic"5 elements and a space)
    const base64 = auth.slice(6);
    const decoded = atob(base64);

     // we cut the Auth at the ':'
    const [user, pass] = decoded.split(':');

    return user === API_USER && pass === API_PASS;
}