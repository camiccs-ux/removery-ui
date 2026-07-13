import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Overlay/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Base do side panel de "New appointment" / "Appointment detail" no
 * R7. O suposto "duplicado" de sheet na Removery Library era, na
 * verdade, um ícone lucide com o mesmo nome — ver seção 2 da
 * auditoria.
 */
export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>New appointment</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New appointment</SheetTitle>
          <SheetDescription>Search for a client to continue.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open (mobile bottom sheet)</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Find availability</SheetTitle>
          <SheetDescription>Padrão usado no fluxo de agendamento mobile.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
