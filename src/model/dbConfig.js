const {JSONFilePreset} = require('lowdb/node');

const defaultData = { funcionarios:[], dias: [] };
const db = await JSONFilePreset('db.json', defaultData);

module.exports = {db};
