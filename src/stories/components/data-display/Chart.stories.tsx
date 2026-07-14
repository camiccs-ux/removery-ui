import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const chartData = [
  { month: 'Jan', sessions: 186, consultations: 42 },
  { month: 'Feb', sessions: 205, consultations: 51 },
  { month: 'Mar', sessions: 237, consultations: 48 },
  { month: 'Apr', sessions: 173, consultations: 39 },
  { month: 'May', sessions: 209, consultations: 55 },
  { month: 'Jun', sessions: 264, consultations: 61 },
]

const chartConfig = {
  sessions: { label: 'Sessions', color: 'var(--chart-1)' },
  consultations: { label: 'Consultations', color: 'var(--chart-2)' },
} satisfies ChartConfig

const meta = {
  title: 'Data Display/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-64 w-96">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="sessions" fill="var(--color-sessions)" radius={4} />
        <Bar dataKey="consultations" fill="var(--color-consultations)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}
