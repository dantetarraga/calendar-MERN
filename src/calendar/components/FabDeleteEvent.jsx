import { Button } from '@nextui-org/react'
import { Trash2 } from 'lucide-react'

import { useCalendarStore } from '../../hook'

const FabDeleteEvent = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore()

  const handleDeleteEvent = () => {
    startDeletingEvent()
  }

  return (
    <Button
      onClick={handleDeleteEvent}
      isIconOnly
      size='lg'
      variant='solid'
      className={`rounded-full bottom-[25px] left-[25px] z-10 absolute bg-red-600 text-white ${!hasEventSelected && 'hidden'}`}
      disabled={!hasEventSelected}
    >
      <Trash2 />
    </Button>
  )
}

export default FabDeleteEvent
