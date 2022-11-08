import clsx from 'clsx';
import { type Component, For, createSignal, createEffect } from 'solid-js';

const themes = [
  {
    name: 'light',
    icon: (
      <svg
        role="img"
        aria-label="Sun icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <title>Sun icon</title>
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'dark',
    icon: (
      <svg
        role="img"
        aria-label="Moon icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <title>Moon icon</title>
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    ),
  },
];

const getInitTheme = () => {
  const theme = localStorage?.getItem('theme');
  if (theme) {
    return theme;
  } else if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
};

const ThemeToggleButton: Component = () => {
  const rootEl =
    typeof document !== 'undefined' ? document.documentElement : null;

  const [currentTheme, setCurrentTheme] = createSignal(getInitTheme());
  const [isToggled, setIsToggled] = createSignal(false);

  const handleChange = (event: any) => {
    setCurrentTheme((event.target as HTMLInputElement)?.value);
    setIsToggled(true);
  };

  createEffect(() => {
    if (isToggled()) {
      localStorage.setItem('theme', currentTheme());
    }

    if (rootEl) {
      rootEl.dataset.theme = currentTheme();
    }
  }, [currentTheme, isToggled]);

  return (
    <div class="flex">
      <For each={themes}>
        {({ name: themeName, icon }) => {
          return (
            <label class={themeName === currentTheme() ? 'checked' : ''}>
              <div
                class={clsx(
                  'p-1 m-1 cursor-pointer transition-colors hover:text-amber-700 hover:dark:text-amber-300',
                  themeName === currentTheme()
                    ? 'border-b border-solid border-amber-700 dark:border-amber-300 text-amber-700 dark:text-amber-300'
                    : 'text-amber-900 dark:text-amber-100',
                )}
              >
                {icon}
              </div>
              <input
                class="hidden"
                type="radio"
                name="theme-toggle"
                checked={themeName === currentTheme()}
                value={themeName}
                title={`Use ${themeName} theme`}
                onInput={handleChange}
                aria-label={`Use ${themeName} theme`}
              />
            </label>
          );
        }}
      </For>
    </div>
  );
};

export default ThemeToggleButton;
