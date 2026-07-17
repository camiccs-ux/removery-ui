import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const studios = [
  'Austin - Anderson Mill',
  'Austin - South Congress',
  'Round Rock',
  'Dallas - Uptown',
  'Houston - Heights',
]

const meta = {
  title: 'Data Display/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Carousel className="w-72">
      <CarouselContent>
        {studios.map((studio) => (
          <CarouselItem key={studio}>
            <Card>
              <CardContent className="flex h-32 items-center justify-center p-6 text-center text-sm font-medium">
                {studio}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
