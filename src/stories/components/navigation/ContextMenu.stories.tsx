import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

const meta = {
  title: 'Components/Navigation/Context Menu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="border-border flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right-click this appointment slot
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuLabel>Slot options</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>Book appointment</ContextMenuItem>
        <ContextMenuItem>Block time</ContextMenuItem>
        <ContextMenuItem variant="destructive">Remove</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
