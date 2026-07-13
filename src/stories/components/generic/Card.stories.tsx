import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Card é um wrapper simples sem variantes — igual ao Card real do
 * shadcn/ui em código. É composto com sub-partes (Header, Content,
 * Footer), não configurado por props de variante (ver seção 3 da
 * auditoria — isso é arquitetura intencional, não um gap).
 */
export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>One price. Unlimited sessions.</CardTitle>
        <CardDescription>Complete Removal Package</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Starting price</p>
        <p className="text-2xl font-semibold">$69/mo</p>
      </CardContent>
      <CardFooter>
        <Button variant="pill" className="w-full">Book Free Consultation</Button>
      </CardFooter>
    </Card>
  ),
}

/**
 * Exemplo do "Appointment Card" do R7 — construído em cima do Card
 * base + os tokens `status-*`, como recomendado no plano de ação da
 * auditoria (não é uma variante nova do Card em si).
 */
export const AppointmentCardExample: Story = {
  render: () => (
    <Card className="w-72 border-l-4 border-l-[var(--status-confirmed)] bg-status-confirmed-bg/40 py-3">
      <CardContent className="px-4">
        <div className="flex items-center justify-between">
          <p className="font-medium">Vero Delgado</p>
          <span className="text-xs font-semibold text-status-confirmed">CONFIRMED</span>
        </div>
        <p className="text-sm text-muted-foreground">Complete Removal · M · #4/10</p>
        <Progress value={40} className="mt-3 h-1.5" />
      </CardContent>
    </Card>
  ),
}
