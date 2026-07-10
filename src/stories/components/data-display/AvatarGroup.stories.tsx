import type { Meta, StoryObj } from '@storybook/react-vite'
import { AvatarGroup } from '@/components/ui/avatar-group'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const meta = {
  title: 'Components/Data Display/Avatar Group',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar>
        <AvatarFallback>JR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MW</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KL</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}
