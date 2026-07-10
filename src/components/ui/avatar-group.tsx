import * as React from "react"

import { cn } from "@/lib/utils"

// Avatar Group — composição do Avatar existente, sem primitive Radix própria
// (segue o mesmo padrão do component set "Avatar Group" no Figma: um wrapper
// de layout que sobrepõe Avatars filhos).
function AvatarGroup({
  className,
  max,
  children,
  ...props
}: React.ComponentProps<"div"> & { max?: number }) {
  const items = React.Children.toArray(children)
  const visible = max ? items.slice(0, max) : items
  const overflow = max && items.length > max ? items.length - max : 0

  return (
    <div
      data-slot="avatar-group"
      className={cn("flex items-center -space-x-2", className)}
      {...props}
    >
      {visible.map((child, i) => (
        <div
          key={i}
          className="ring-background rounded-full ring-2"
          style={{ zIndex: visible.length - i }}
        >
          {child}
        </div>
      ))}
      {overflow > 0 && (
        <div
          className="bg-muted text-muted-foreground ring-background relative z-0 flex size-8 items-center justify-center rounded-full text-xs font-medium ring-2"
        >
          +{overflow}
        </div>
      )}
    </div>
  )
}

export { AvatarGroup }
