import Birthday from "./Birthday"

const Birthdays = ({bdays, onDelete}) => {

  return (
    <>
      {
        bdays.map((person) => (
          <Birthday key={person.id} person={person} onDelete={onDelete}/>
        ))
      }
    </>
  )
}

export default Birthdays
