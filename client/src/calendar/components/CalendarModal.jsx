import { Controller, useForm } from 'react-hook-form'

import { getLocalTimeZone, now } from '@internationalized/date'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal'
import { Button, DateRangePicker, Divider, Input, Textarea } from '@nextui-org/react'
import { I18nProvider } from '@react-aria/i18n'

import { useUiStore } from '../../hook/useUiStore'

const CalendarModal = ({ onOpen, onClose, onOpenChange }) => {
  const { isDateModalOpen } = useUiStore()
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      title: '',
      description: '',
      dateRange: {
        startDateTime: now(getLocalTimeZone()),
        endDateTime: now(getLocalTimeZone()).add({ hours: 1 })
      }
    }
  })

  const onSubmit = (data) => {
    console.log(data)
    onClose()
  }

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isDateModalOpen} onOpenChange={onOpenChange} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='text-2xl font-bold'>Nuevo Evento</ModalHeader>
              <Divider />

              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)} id='create-event-form' className='space-y-5'>

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
                        color={
                          !!error
                            ? 'danger'
                            : 'default'
                        }
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
                <Button color='primary' form='create-event-form' type='submit'>
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
