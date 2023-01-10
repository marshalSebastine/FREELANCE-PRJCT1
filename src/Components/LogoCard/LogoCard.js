import './LogoCard.styles.css';

const LogoCard = ({children}) => {
    return(
        <div className='LogoCard'>
            <div className='LogoHeader'>
                <h1 className='Logo'>{'LOGO'}</h1>
            </div>
            {children}
        </div>
    )
}

export default LogoCard