import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const meta = {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { type: 'single' },
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a status-blocked slot?</AccordionTrigger>
        <AccordionContent>
          A time slot marked unavailable by the studio — shown with the
          dashed `status-blocked` badge treatment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I reschedule from the day view?</AccordionTrigger>
        <AccordionContent>
          Yes — open the appointment's dropdown menu and select Reschedule.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
