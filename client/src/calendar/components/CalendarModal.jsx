import { Controller, Form, useForm } from 'react-hook-form'

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal'
import { Button, DatePicker, Divider, Input, Textarea } from '@nextui-org/react'
import { addHours } from 'date-fns'

import FormField from './FormField'

const CalendarModal = ({ isOpen, onOpen, onOpenChange }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      description: '',
      startDateTime: new Date(),
      endDateTime: addHours(new Date(), 2)
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
                  <FormField
                    name='startDateTime'
                    control={control}
                    label='Fecha de inicio'
                    component={DatePicker}
                  />
                  <FormField
                    name='title'
                    control={control}
                    label='Título'
                    placeholder='Título del evento'
                    component={Input}
                  />
                  <FormField
                    name='description'
                    control={control}
                    label='Descripción'
                    placeholder='Descripción del evento'
                    component={Textarea}
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
