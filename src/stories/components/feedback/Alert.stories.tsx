import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'destructive', 'warning', 'info'] },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-96">
      <AlertTitle>Informed consent not signed</AlertTitle>
      <AlertDescription>This client needs to sign before the session can start.</AlertDescription>
    </Alert>
  ),
}

/**
 * Reproduz o banner com múltiplos itens empilhados visto no painel
 * de Appointment do R7 (ALERT + texto, depois PKG + texto) — ver
 * seção 7 da auditoria, "padrão composto sem componente formal".
 */
export const MultiItemBanner: Story = {
  render: () => (
    <Alert variant="warning" className="w-96">
      <AlertTitle>Critical alert on profile — keloid scarring history</AlertTitle>
      <AlertDescription>Informed consent not signed.</AlertDescription>
    </Alert>
  ),
}
