import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Total contacts:', contacts.length);
  } catch (error) {
    console.error('Error counting contacts:', error.message);
  }
};

countContacts();
