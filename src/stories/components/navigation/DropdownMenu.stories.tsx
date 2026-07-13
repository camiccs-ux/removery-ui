import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Navigation/Dropdown Menu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Appointment</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Check in</DropdownMenuItem>
        <DropdownMenuItem>Reschedule</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Cancel</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
