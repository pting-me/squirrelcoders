import formatPublishDate from './formatPublishDate';

import { describe, test, expect } from 'vitest';

describe('formatPublishDate', () => {
  test('should format date correctly', () => {
    const formattedPublishDate = formatPublishDate('2022-01-01', 'en-US');
    expect(formattedPublishDate).toBe('January 1, 2022');
  });
});
