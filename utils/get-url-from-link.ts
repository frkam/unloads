export const getIdFromDownloadLink = (link: string) => {
  const id = link.match(/\d+/g);

  if (!id) return;

  return id[0];
};
