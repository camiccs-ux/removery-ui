import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Data Display/DataTable',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const appointments = [
  { client: 'Jordan Reyes', studio: 'Austin - Anderson Mill', time: '9:00 AM', status: 'status-confirmed' },
  { client: 'Priya Shah', studio: 'Austin - South Congress', time: '10:30 AM', status: 'status-pending' },
  { client: 'Marcus Webb', studio: 'Round Rock', time: '1:00 PM', status: 'status-checked-in' },
  { client: 'Alina Torres', studio: 'Austin - Anderson Mill', time: '2:30 PM', status: 'status-noshow' },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Agendamentos de hoje — R7 Scheduling</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Estúdio</TableHead>
          <TableHead>Horário</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((a) => (
          <TableRow key={a.client}>
            <TableCell className="font-medium">{a.client}</TableCell>
            <TableCell>{a.studio}</TableCell>
            <TableCell>{a.time}</TableCell>
            <TableCell className="text-right">
              <Badge variant={a.status as any}>{a.status.replace('status-', '')}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
