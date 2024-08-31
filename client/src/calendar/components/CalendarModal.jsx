import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { getLocalTimeZone, now } from '@internationalized/date'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal'
import {
  Button,
  DateRangePicker,
  Divider,
  Input,
  Textarea
} from '@nextui-org/react'
import { I18nProvider } from '@react-aria/i18n'
import { Save } from 'lucide-react'

import { useCalendarStore } from '../../hook'
import { useUiStore } from '../../hook/useUiStore'
import { converToDate, formatedDate, randomColor } from '../../utils'

const CalendarModal = ({ onOpenChange }) => {
  const { selectedEvent, startSavingEvent } = useCalendarStore()
  const { isDateModalOpen, closeDateModal } = useUiStore()
  const { control, handleSubmit, getValues, reset } = useForm({
    defaultValues: {
      title: '',
      description: '',
      dateRange: {
        startDateTime: now(getLocalTimeZone()),
        endDateTime: now(getLocalTimeZone()).add({ hours: 1 })
      }
    }
  })

  useEffect(() => {
    if (selectedEvent !== null) {
      reset({
        title: selectedEvent.title,
        description: selectedEvent.notes,
        dateRange: {
          startDateTime: formatedDate(selectedEvent.start),
          endDateTime: formatedDate(selectedEvent.end)
        }
      })
    }
  }, [selectedEvent])

  const onSubmit = async (data) => {
    const { startDateTime, endDateTime } = data.dateRange
    const { title, description } = data

    await startSavingEvent({
      title,
      notes: description,
      start: converToDate(startDateTime),
      end: converToDate(endDateTime),
      bgColor: randomColor(),
      user: {
        _id: 1,
        name: 'Carlos'
      }
    })
    closeDateModal()
    // onClose()
  }

  return (
    <>
      <Modal
        isOpen={isDateModalOpen}
        onOpenChange={onOpenChange}
        onClose={closeDateModal}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='text-2xl font-bold'>
                Nuevo Evento
              </ModalHeader>
              <Divider />

              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id='create-event-form'
                  className='space-y-5'
                >
                  <Controller
                    name='dateRange'
                    control={control}
                    render={() => (
                      <I18nProvider locale='es-ES'>
                        <DateRangePicker
                          label='Duracion del evento'
                          hideTimeZone
                          visibleMonths={2}
                          defaultValue={{
                            start: getValues('dateRange.startDateTime'),
                            end: getValues('dateRange.endDateTime')
                          }}
                        />
                      </I18nProvider>
                    )}
                  />

                  <Controller
                    name='title'
                    control={control}
                    rules={{ required: 'El título es requerido' }}
                    render={({ field, fieldState: { error } }) => (
                      <Input
                        label='Título'
                        placeholder='Título del evento'
                        isInvalid={!!error}
                        errorMessage={error?.message}
                        color={!!error
                          ? 'danger'
                          : 'default'}
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name='description'
                    rules={{ required: 'La descripción es requerida' }}
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        label='Descripción'
                        placeholder='Descripción del evento'
                        {...field}
                      />
                    )}
                  />
                </form>
              </ModalBody>

              <ModalFooter>
                <Button color='danger' variant='flat' onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  color='primary'
                  form='create-event-form'
                  type='submit'
                  endContent={<Save size={20} />}
                >
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default CalendarModal
