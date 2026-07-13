import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

const meta = {
  title: 'Components/Forms/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="w-80 rounded-lg border shadow-sm">
      <CommandInput placeholder="Search studios, clients, appointments..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Studios">
          <CommandItem>Austin - Anderson Mill</CommandItem>
          <CommandItem>Austin - South Congress</CommandItem>
          <CommandItem>Round Rock</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>New appointment</CommandItem>
          <CommandItem>New client</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
