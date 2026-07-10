import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const meta = {
  title: 'Components/Navigation/Navigation Menu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Scheduling</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-2 p-2">
              <li>
                <NavigationMenuLink href="#">Day view</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Week view</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Waitlist</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Clients</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
