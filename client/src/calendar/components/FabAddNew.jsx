import React from 'react'

import { Button } from '@nextui-org/react'
import { addHours } from 'date-fns'
import { Plus } from 'lucide-react'

import { useCalendarStore, useUiStore } from '../../hook'

const FabAddNew = () => {
  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  const handleClickNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 1)
    })
    openDateModal()
  }

  return (
    <Button
      onClick={handleClickNew}
      isIconOnly
      aria-label='add-event'
      color='primary'
      size='lg'
      variant='solid'
      className='absolute bottom-[25px] right-[25px] z-10 rounded-full'
    >
      <Plus />
    </Button>
  )
}

export default FabAddNew
