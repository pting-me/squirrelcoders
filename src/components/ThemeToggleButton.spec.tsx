import ThemeToggleButton from './ThemeToggleButton';

import { describe, test, expect } from 'vitest';

// there's an issue with the exports of the library
// issue has been merged, and just waiting on deploy
import { render } from 'solid-testing-library';

describe('ThemeToggleButton', () => {
  test.skip('should render', () => {
    const { baseElement } = render(() => <ThemeToggleButton />);
    expect(baseElement).toBeInTheDocument();
  });
});
