import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'pill'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  args: {
    children: 'Book appointment',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Destructive: Story = { args: { variant: 'destructive', children: 'Cancel appointment' } }

export const Outline: Story = { args: { variant: 'outline', children: 'Actions' } }

export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary' } }

export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost' } }

export const Link: Story = { args: { variant: 'link', children: 'Book a one-off service instead' } }

/**
 * Variante `pill` — vista no botão "Book Free Consultation" do funil
 * público (raio totalmente arredondado). Estava sem variante
 * documentada na auditoria; formalizada aqui.
 */
export const Pill: Story = { args: { variant: 'pill', children: 'Book Free Consultation' } }

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

export const Disabled: Story = { args: { disabled: true, children: 'Book appointment' } }
