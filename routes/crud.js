import { Router } from 'express';
import connection from '../databases/db';

const router = Router()

// connection.connection();

router.get('/select', (req, res) => {
    connection.query('SELECT * FROM user', (err, rows) => {
        if (err) throw err;
        res.send({ rows: rows })
    })
})

router.post('/insert', (req, res) => {
    console.log(req.body)
    let [id, pw, name] = [req.body.id, req.body.pw, req.body.name];
    console.log(id)
    connection.query(`INSERT INTO user (id, pw, name) VALUES ('${id}', '${pw}', '${name}')`, (err, result) => {
        if (err) res.send({ result: false })
        console.log(result)
        res.send({ result: true })
    })
})

router.put('/update', (req, res) => {
    let [id, pw, name] = [req.body.id, req.body.pw, req.body.name]
    connection.query(`UPDATE user SET name='${name}' WHERE id = '${id}' and  pw ='${pw}'`, (err, result) => {
        if (err) throw err;
        res.send({ result: true })
    })
})

router.delete('/delete', (req, res) => {
    let [id, pw] = [req.body.id, req.body.pw];
    connection.query(`DELETE FROM user WHERE id='${id}' and pw='${pw}'`, (err, result) => {
        if (err) throw err;
        res.send({ result: true })
    })
})


export default router;

