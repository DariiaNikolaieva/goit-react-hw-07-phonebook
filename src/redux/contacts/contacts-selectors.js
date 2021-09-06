export const getIsLoading = (state) => state.contacts.loading;
export const getAllContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilteredContacts = (state) => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default { getIsLoading, getAllContacts, getFilter, getFilteredContacts };
