const formatPublishDate = (publishDate: string, locales?: Intl.LocalesArgument) => {
  const ptPublishDate = new Date(publishDate);

  // Assume posts are published at noon Pacific Time, ignoring DST
  // New dates are set to UTC 00:00 => PST 16:00 -1 day
  // So we want to rewind -4h to get to noon, then fast forward one day +24h
  // -4 + 24 = 20
  ptPublishDate.setHours(ptPublishDate.getHours() + 20);

  const localePublishDate = ptPublishDate.toLocaleDateString(locales, {
    dateStyle: 'long',
  });

  return localePublishDate;
};

export default formatPublishDate;
