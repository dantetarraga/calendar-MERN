import { Controller, useForm } from 'react-hook-form'

import { parseZonedDateTime } from '@internationalized/date'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal'
import { Button, DatePicker, Divider, Input, Textarea } from '@nextui-org/react'
import { I18nProvider } from '@react-aria/i18n'

const CalendarModal = ({ isOpen, onOpen, onOpenChange }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      description: '',
      startDateTime: null,
      endDateTime: null
    }
  })
  const onSubmit = (data) => {
    console.log('submit', data)
  }

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='text-2xl font-bold'>Nuevo Evento</ModalHeader>
              <Divider />

              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)} id='create-event-form' className='space-y-5'>
                  <Controller
                    name='startDateTime'
                    control={control}
                    render={() => (
                      <I18nProvider locale='es-ES'>
                        <DatePicker
                          label='Fecha y hora inicio'
                          className='max-w-full'
                          defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
                          labelPlacement='outside'
                          hideTimeZone
                        />
                      </I18nProvider>
                    )}
                  />

                  <Controller
                    name='endDateTime'
                    control={control}
                    render={() => (
                      <I18nProvider locale='es-ES'>
                        <DatePicker
                          label='Fecha y hora fin'
                          className='max-w-full'
                          defaultValue={parseZonedDateTime('2024-11-07T00:45[America/Lima]')}
                          labelPlacement='outside'
                          hideTimeZone
                        />
                      </I18nProvider>
                    )}
                  />
                  <Controller
                    name='title'
                    control={control}
                    render={({ field }) => (
                      <Input
                        label='Título'
                        placeholder='Título del evento'
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name='description'
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
                <Button color='danger' variant='light' onPress={onClose}>
                  Cerrar
                </Button>
                <Button color='primary' onPress={onClose} form='create-event-form' type='submit'>
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
