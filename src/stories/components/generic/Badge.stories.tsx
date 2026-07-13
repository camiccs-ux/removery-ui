import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default', 'secondary', 'destructive', 'outline',
        'status-new', 'status-pending', 'status-confirmed',
        'status-checked-in', 'status-in-service', 'status-noshow', 'status-blocked',
        'pkg', 'guaranteed', 'online', 'alert', 'balance',
      ],
    },
  },
  args: { children: 'Badge', variant: 'default' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

/**
 * Semântica de status do agendamento (R7 Scheduling) — cada variante
 * mapeia 1:1 para um token `status-*` criado na auditoria do design
 * system. Isso é a documentação "cor → significado" que faltava
 * (seção 5 do relatório).
 */
export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="status-new">New</Badge>
      <Badge variant="status-pending">Pending</Badge>
      <Badge variant="status-confirmed">Confirmed</Badge>
      <Badge variant="status-checked-in">Checked-in</Badge>
      <Badge variant="status-in-service">In service</Badge>
      <Badge variant="status-noshow">No-show</Badge>
      <Badge variant="status-blocked">Blocked</Badge>
    </div>
  ),
}

/**
 * Flags vistas no R7 (PKG, GUAR, ONLINE, ALERT, $) — cores ainda não
 * tokenizadas oficialmente (pendente na auditoria), usadas aqui como
 * classes Tailwind diretas até virarem tokens semânticos.
 */
export const Flags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="pkg">PKG</Badge>
      <Badge variant="guaranteed">GUAR</Badge>
      <Badge variant="online">ONLINE</Badge>
      <Badge variant="alert">ALERT</Badge>
      <Badge variant="balance">$</Badge>
    </div>
  ),
}
