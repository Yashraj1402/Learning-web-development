import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ heading, onClick, showForm }) => {

    return (
        <header className='header'>
            <h1>{heading}</h1>
            <Button 
                color="lavender" 
                text={showForm == true ? "Close" : "Add"}
                onClick={onClick}
            />
        </header>
    )
}

Header.defaultProps = {
    heading: 'Birthday Tracker',
}

Header.propTypes = {
    heading: PropTypes.string.isRequired,
}

export default Header
