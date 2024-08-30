import React from 'react'

import { Button } from '@nextui-org/react'
import { CirclePlus } from 'lucide-react'

const FabAddNew = () => {
  return (
    <Button isIconOnly aria-label='add-event' color='primary' size='lg' variant='shadow' className='absolute bottom-[25px] right-[25px] z-10'>
      <CirclePlus />
    </Button>
  )
}

export default FabAddNew
