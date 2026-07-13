import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select defaultValue="anderson-mill">
      <SelectTrigger className="w-64">
        <SelectValue placeholder="Choose your studio" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="anderson-mill">Austin - Anderson Mill</SelectItem>
        <SelectItem value="south-congress">Austin - South Congress</SelectItem>
        <SelectItem value="round-rock">Round Rock</SelectItem>
      </SelectContent>
    </Select>
  ),
}
