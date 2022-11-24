import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [name, setName] = useState('')
    const [birthDate, setDate] = useState('')
    const [birthMonth, setMonth] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        if(name == '' || birthDate == '' || birthMonth == '' || birthDate < 1 || birthDate > 31){
            alert('Please enter valid entries')
            return;
        }

        onAdd({name, birthDate, birthMonth})

        setName('')
        setDate('')
        setMonth('')
    }

    return (
    <form onSubmit={onSubmit}>
        <div className='input-form'>
            <h3>Add Details</h3>
            <div>
                <input type="text" placeholder="Name of Person" 
                    className='input-block'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </div>
            <div>
                <input type="number" placeholder="Date of Birth" 
                    className='input-block'
                    value={birthDate}
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                />
            </div>
            <div>
                <input type="text" placeholder="Month of Birth" 
                    className='input-block'
                    value={birthMonth}
                    onChange={(e) => {
                        setMonth(e.target.value)
                    }}
                />
            </div>
            
            <input type="submit" value={"Save"} className="save-btn" />
        </div>
    </form>
    )
}

export default AddTask
