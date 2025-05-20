import * as React from "react"

import { cn } from "@/lib/utils"


export type StackProps = React.ComponentProps<"div"> & {
    gap?: number | string
}

function Stack({ className, gap = 4, ...props }: StackProps) {
    return (
        <div
            data-slot="stack"
            className={cn(
                "flex flex-col",
                `gap-${gap}`,
                className
            )}
            {...props}
        />
    )
}

export { Stack }