import React from "react"

import { Button } from "@chakra-ui/react"

const CustomButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button>
      {children}
    </Button>
  )
}

export default CustomButton