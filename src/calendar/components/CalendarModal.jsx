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
        start: now(getLocalTimeZone()),
        end: now(getLocalTimeZone()).add({ hours: 1 })
      }
    }
  })

  useEffect(() => {
    if (selectedEvent !== null) {
      reset({
        id: selectedEvent.id,
        title: selectedEvent.title,
        description: selectedEvent.notes,
        dateRange: {
          start: formatedDate(selectedEvent.start),
          end: formatedDate(selectedEvent.end)
        }
      })
    }
  }, [selectedEvent])

  const onSubmit = async (data) => {
    const { start, end } = data.dateRange
    const { title, description, id } = data

    await startSavingEvent({
      id: data.id
        ? id
        : null,
      title,
      notes: description,
      start: converToDate(start),
      end: converToDate(end),
      bgColor: randomColor()
    })
    closeDateModal()
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
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <I18nProvider locale='es-ES'>
                        <DateRangePicker
                          label='Duracion del evento'
                          hideTimeZone
                          visibleMonths={2}
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          ref={ref}
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
