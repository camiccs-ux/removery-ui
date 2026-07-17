import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Variantes de status (agendamento) usam os tokens `status-*` criados
 * na auditoria do design system — mesma fonte de verdade do Figma.
 * Isso resolve o gap de "semântica de cor não documentada" apontado
 * na seção 5 do relatório de auditoria.
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-white",
        outline: "text-foreground",

        // Status do agendamento — R7 Scheduling
        "status-new":
          "border-transparent bg-status-new-bg text-status-new",
        "status-pending":
          "border-transparent bg-status-pending-bg text-status-pending",
        "status-confirmed":
          "border-transparent bg-status-confirmed-bg text-status-confirmed",
        "status-checkedin":
          "border-transparent bg-status-checkedin-bg text-status-checkedin",
        "status-inservice":
          "border-transparent bg-status-inservice-bg text-status-inservice",
        "status-noshow":
          "border-transparent bg-status-noshow-bg text-status-noshow",
        "status-blocked":
          "border border-dashed bg-transparent text-status-blocked",

        // Flags — PKG / GUAR / ONLINE / ALERT / $ (vistos no R7, cores
        // aproximadas — ainda não documentadas como tokens semânticos)
        pkg: "border-transparent bg-blue-600 text-white",
        guaranteed: "border-transparent bg-emerald-700 text-white",
        online: "border-transparent bg-teal-500 text-white",
        alert: "border-transparent bg-red-700 text-white",
        balance: "border-transparent bg-amber-600 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span"
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
