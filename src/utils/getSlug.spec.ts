import getSlug from './getSlug';

import { describe, test, expect } from 'vitest';

describe('getSlug', () => {
  test('should get slug of file', () => {
    const slug = getSlug('path/to/file.ext');
    expect(slug).toBe('file');
  });
  test('should get slug of file without extension', () => {
    const slug = getSlug('path/to/file');
    expect(slug).toBe('file');
  });
  test('should get slug of file without paths', () => {
    const slug = getSlug('file.ext');
    expect(slug).toBe('file');
  });
  test('should get slug of file without paths or extension', () => {
    const slug = getSlug('file');
    expect(slug).toBe('file');
  });
  test('empty input should return empty', () => {
    const slug = getSlug('');
    expect(slug).toBe('');
  });
});
