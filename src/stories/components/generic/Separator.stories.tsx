import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <div className="text-sm font-medium">Austin - Anderson Mill</div>
      <Separator className="my-3" />
      <div className="text-muted-foreground text-sm">9:00 AM — 5:00 PM</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-3 text-sm">
      <span>Schedule</span>
      <Separator orientation="vertical" />
      <span>Clients</span>
      <Separator orientation="vertical" />
      <span>Settings</span>
    </div>
  ),
}
