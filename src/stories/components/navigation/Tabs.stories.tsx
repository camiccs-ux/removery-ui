import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

/**
 * `Tabs` (conjunto/container) e `Tab` (item individual, o
 * TabsTrigger) são componentes distintos no Figma — relação
 * parte/todo, não duplicidade (ver seção 3 da auditoria).
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="grid" className="w-72">
      <TabsList>
        <TabsTrigger value="grid">Grid</TabsTrigger>
        <TabsTrigger value="list">List</TabsTrigger>
      </TabsList>
      <TabsContent value="grid" className="text-sm text-muted-foreground p-2">
        Visualização em grade por sala.
      </TabsContent>
      <TabsContent value="list" className="text-sm text-muted-foreground p-2">
        Visualização em lista (tabela).
      </TabsContent>
    </Tabs>
  ),
}
