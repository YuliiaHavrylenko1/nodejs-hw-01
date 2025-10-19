import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export async function removeLastContact() {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact removed.');
  } else {
    console.log('No contacts to remove.');
  }
}

if (process.argv[1].endsWith('removeLastContact.js')) {
  removeLastContact();
}
