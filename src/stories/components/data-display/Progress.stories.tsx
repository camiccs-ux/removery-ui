import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'Data Display/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100 } } },
  args: { value: 54 },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Nome real no Figma: `progress-bar` (a Cami já corrigiu para bater
 * com a convenção shadcn `Progress`, embora a busca no Figma ainda
 * mostrasse o nome antigo por atraso de indexação no momento da
 * auditoria).
 */
export const Default: Story = { render: (args) => <Progress {...args} className="w-64" /> }

export const SessionsUsed: Story = {
  render: () => (
    <div className="w-64">
      <div className="flex justify-between text-sm mb-1">
        <span>Sessions used</span>
        <span className="font-medium">4 of 10</span>
      </div>
      <Progress value={40} />
    </div>
  ),
}
