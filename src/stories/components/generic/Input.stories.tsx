import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { placeholder: 'Search for name or phone' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { render: (args) => <Input {...args} className="w-72" /> }

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid gap-1.5 w-72">
      <Label htmlFor="client">Search client</Label>
      <Input id="client" {...args} />
    </div>
  ),
}

export const Disabled: Story = { args: { disabled: true }, render: (args) => <Input {...args} className="w-72" /> }
