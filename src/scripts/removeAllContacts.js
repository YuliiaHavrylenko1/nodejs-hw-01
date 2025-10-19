import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('No contacts to remove.');
    return;
  }

  console.log('All contacts:', contacts);

  await writeContacts([]);
  console.log('All contacts have been removed');
};

async function main() {
  await removeAllContacts();
}

main();
