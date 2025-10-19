import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error;
  }
};

const main = async () => {
  const contacts = await getAllContacts();
  if (contacts.length === 0) {
    console.log('No contacts found');
  } else {
    console.log('Contacts:', contacts);
  }
};

main();
