import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import moon from "@/assets/imgs/icons/moon.png"
import moon_1 from "@/assets/imgs/icons/moon-1.png"



import { cn } from "@/lib/utils"



const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, checked, onCheckedChange, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex relative h-[34px] w-[70px]  my-2 mx-4 shrink-0 cursor-pointer items-center rounded-full border-[1px] border-gray shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-transparent  data-[state=unchecked]:bg-white ",
      className
    )}
    checked={checked}
    onCheckedChange={onCheckedChange}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-8 w-8 rounded-full bg-background shadow-lg ring-0 transition-transform bg-yallow data-[state=checked]:bg-yallow data-[state=checked]:translate-x-9 data-[state=unchecked]:translate-x-0"
      )}
    />
    <div className="absolute flex justify-between w-full p-1 align-middle">
      <span className="flex items-center dark:filter_white"><img src={moon} alt="" /></span>
      <span className="flex items-center mr-1"><img src={moon_1} alt="" /></span>
    </div>
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
