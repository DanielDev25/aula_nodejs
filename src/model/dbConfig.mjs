import {JSONFilePreset} from 'lowdb/node';

const defaultData = { 
    funcionarios:[
        {
            token: "81dc9bdb52d04dc20036dbd8313ed055",
            nome: "Fulano Dital",
            id: 1}
    ]
};
const db = await JSONFilePreset('db.json', defaultData);
await db.write();
export default db;

