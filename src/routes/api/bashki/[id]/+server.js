import pool from '$lib/server/database.js';

export async function GET({params}) {

    const id = params.id;
    const [rows] = await pool.query('SELECT * from bashki where id=?', [id]);

    if (rows.length == 0) {
        return Response.json({message: 'Bashki not found'}, {status: 404})
    }

    return Response.json(rows[0]);
}

export async function DELETE({params}) {
    const id = params.id;
    const [result] = await pool.query('DELETE FROM bashki WHERE id=?', [id]);

    if (result.affectedRows === 0) {
        return Response.json({ message: 'Bashki not found'}, {status: 404})
    }
    return Response.json({message: 'Bashki deleted'});
}

export async function PUT({request,params}) {
    const id = params.id;
    const {name, population, area, region, mayor, party, postal_code} = await request.json();
    const [result] = await pool.query('UPDATE bashki SET name = ?, population = ?, area = ?, region = ?, mayor = ?, party = ?, postal_code = ? where id = ?', [name, population, area, region, mayor, party, postal_code, id]);

    if (result.affectedRows === 0) {
        return Response.json({ massage: 'Bashki not found'}, {status: 404})
    }
    return Response.json({message: 'Bashki updated'});
}