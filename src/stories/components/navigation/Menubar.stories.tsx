import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'

const meta = {
  title: 'Navigation/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Schedule</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New appointment</MenubarItem>
          <MenubarItem>Block time</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print day view</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Studio</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Switch studio</MenubarItem>
          <MenubarItem>Studio settings</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
