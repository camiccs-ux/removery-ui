import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const meta = {
  title: 'Layout/Aspect Ratio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="w-80 overflow-hidden rounded-md bg-muted">
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        Before / after photo
      </div>
    </AspectRatio>
  ),
}
