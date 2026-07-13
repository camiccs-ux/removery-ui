import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

/**
 * `radio` (o item individual) e `radio group` (o conjunto) são
 * componentes distintos no Figma — relação parte/todo, não
 * duplicidade (ver seção 3 da auditoria).
 */
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="30">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="15" id="d15" />
        <Label htmlFor="d15">15 min</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="30" id="d30" />
        <Label htmlFor="d30">30 min</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="45" id="d45" />
        <Label htmlFor="d45">45 min</Label>
      </div>
    </RadioGroup>
  ),
}
