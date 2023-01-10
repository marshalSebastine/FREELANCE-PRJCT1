import './CustomButton.styles.css'

const CustomButton = ({inverted,txt}) => {
    let btnstyle = inverted ? 'InvertedButton' : 'ColorButton'
    return(
        <button className={btnstyle}>
            {txt}
        </button>
    )
}

export default CustomButton