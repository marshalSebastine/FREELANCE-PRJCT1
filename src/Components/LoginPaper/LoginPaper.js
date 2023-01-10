import './LoginPaper.styles.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '../CustomButton/CustomButton';


const LoginPaper = () => {

     
    return(
        <div className="LoginPaper">
            <h2 className='Welcome'>Welcome <span className='back'>Back!</span></h2>
            <p className='logintest'>Please enter your login information to sign in<br /> to your account. If you don’t have an account<br /> please sign up.</p>
            <div className='LoginFields'>
                <label className='formlabel'>Email / Mobile Number</label>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label=""
                    name="email"
                    autoComplete="email"
                    autoFocus/>
                <label className='formlabel'>Password</label>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label=""
                    type="password"
                    id="password"
                    autoComplete="current-password"/>
                <div className='control-wrapper'>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <p className='forgotpwd'>Forgot Password?</p>
                </div>
                <CustomButton inverted={false} txt={'Login'}/>
                <CustomButton inverted={true} txt={'Sign in with google'}/>
                <p className='bottom-message'>Don’t have an account?<span className='back'> Sign up</span></p>
            </div>
        </div>
    )
}

export default LoginPaper