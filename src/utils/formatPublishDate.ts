const formatPublishDate = (publishDate: string) => {
  const ptPublishDate = new Date(publishDate);
  ptPublishDate.setDate(ptPublishDate.getDate() + 1);

  const localePublishDate = ptPublishDate.toLocaleDateString(undefined, {
    dateStyle: 'long',
  });

  return localePublishDate;
};

export default formatPublishDate;
