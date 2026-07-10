import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import type { DateRange } from 'react-day-picker'

const meta = {
  title: 'Components/Data Entry/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    )
  },
}

export const AppointmentRange: Story = {
  name: 'R7 — Date Range Selection',
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: undefined,
    })
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        className="rounded-lg border"
      />
    )
  },
}
