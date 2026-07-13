import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const meta = {
  title: 'Components/Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const studios = [
  { name: 'Austin - Anderson Mill', chairs: 6, manager: 'Priya Shah' },
  { name: 'Austin - South Congress', chairs: 4, manager: 'Marcus Webb' },
  { name: 'Round Rock', chairs: 5, manager: 'Alina Torres' },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Studio</TableHead>
          <TableHead>Chairs</TableHead>
          <TableHead>Manager</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {studios.map((s) => (
          <TableRow key={s.name}>
            <TableCell className="font-medium">{s.name}</TableCell>
            <TableCell>{s.chairs}</TableCell>
            <TableCell>{s.manager}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
