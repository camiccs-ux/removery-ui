import type { Meta, StoryObj } from '@storybook/react-vite'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  fullName: z.string().min(2, "Enter the client's full name."),
  email: z.email('Enter a valid email.'),
})

function ClientIntakeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: '', email: '' },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="w-80 space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Jordan Reyes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jordan@email.com" {...field} />
              </FormControl>
              <FormDescription>Used to send appointment reminders.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save client</Button>
      </form>
    </Form>
  )
}

const meta = {
  title: 'Components/Form',
  component: ClientIntakeForm,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ClientIntakeForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { render: () => <ClientIntakeForm /> }
