const CalendarEvent = ({ event }) => {
  const { title, user } = event
  const fullName = `${user.firstName} ${user.lastName}`

  return (
    <>
      <strong>{title}</strong>
      <span>- {fullName}</span>
    </>
  )
}

export default CalendarEvent
