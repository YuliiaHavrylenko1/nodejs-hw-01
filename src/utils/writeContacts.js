import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const writeContacts = async (updatedContacts) => {
    try {
        const data = JSON.stringify(updatedContacts, null, 2);
        await fs.writeFile(PATH_DB, data, {encoding: 'utf8'});
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};
