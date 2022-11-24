import {FaTimes} from 'react-icons/fa'

const Birthday = ({key, person, onDelete}) => {
    return (
      <>
        <div className="details">
          <h3>
            {person.name}
            <FaTimes 
              className='remove' 
              style={{color: 'red', cursor: 'pointer'}}
              onClick = {() => {onDelete(person.id)}}  
            />
          </h3>  
          <p>{person.birthDate} {person.birthMonth}</p>
        </div>
      </>
    )
  }
  
  export default Birthday
  