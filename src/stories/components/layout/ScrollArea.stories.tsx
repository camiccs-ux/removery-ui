import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const clients = Array.from({ length: 20 }, (_, i) => `Client ${i + 1}`)

const meta = {
  title: 'Layout/Scroll Area',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-64 w-64 rounded-md border">
      <div className="p-4">
        <p className="mb-2 text-sm font-medium">Clients</p>
        {clients.map((client) => (
          <div key={client}>
            <p className="py-2 text-sm">{client}</p>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
