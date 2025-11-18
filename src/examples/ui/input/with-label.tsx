import * as React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputWithLabelDemo() {
  const emailId = React.useId()
  
  return (
    <div className="grid max-w-[200px] items-center gap-1.5">
      <Label htmlFor={emailId}>Email</Label>
      <Input type="email" id={emailId} placeholder="Email" />
    </div>
  )
}
