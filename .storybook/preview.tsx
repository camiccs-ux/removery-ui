import React from 'react'
import type { Preview, Decorator } from '@storybook/react-vite'
import '../src/index.css'

const withTheme: Decorator = (Story, context) => {
  const isDark = context.globals.theme === 'dark'
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-background text-foreground min-h-[100px] p-6">
        <Story />
      </div>
    </div>
  )
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Colors', 'Typography', 'Dark Mode', 'Spacing', 'Accessibility'],
          'Components',
          [
            'Data Display',
            'Feedback',
            'Layout',
            'Navigation',
          ],
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Tema global (Removery UI)',
      defaultValue: 'light',
      toolbar: {
        title: 'Tema',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
}

export default preview
