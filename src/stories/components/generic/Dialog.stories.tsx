import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cancel appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel this appointment?</DialogTitle>
          <DialogDescription>This can&apos;t be undone. The client will be notified automatically.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Keep appointment</Button>
          <Button variant="destructive">Cancel appointment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
