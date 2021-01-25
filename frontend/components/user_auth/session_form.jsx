import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    this.props.action(this.state);
  }

  update(type){
    return e => this.setState({ [type]: e.target.value })
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  render() {
    const { formType, demoLogin, errors } = this.props;
    const form = formType === 'login' ? 'LOG IN' : 'SIGN UP';

    const demoUser = {
      email: 'demo@demouser.com',
      password: 'hunter12'
    }

    const appleUser = {
      email: 'apple@apple.com',
      password: 'hunter12'
    }
    
    const googleUser = {
      email: 'google@gmail.com',
      password: 'hunter12'
    }
    const altFormType = formType === 'login' ? 'signup' : 'login';
    const formLink = altFormType === 'login' ? 'SIGN IN TO SLAPIFY' : 'SIGN UP FOR SLAPIFY';
    return (
      <div className='form-container'>
          <div className="logo-wrapper">
            <Link to={'/'}>
              <img className='logo' src={window.slapLogoURL} alt="Slapify logo" width='100' height='80'/>
            </Link>
          </div>
        <div className="form-wrapper">
          <form className='session-form'>
            <h3 id='form-greeting'>{`To continue, ${form.toLowerCase()} to Slapify.`}</h3>
            <button className='demo-btn btn' onClick={ () => demoLogin(demoUser) }>
              <span className='icon-fb'></span>
              CONTINUE WITH DEMO USER
            </button>
            <button className='apple-btn btn' onClick={ () => demoLogin(appleUser) }>
              <span className='icon-apple'></span>
              CONTINUE WITH APPLE
            </button>
            <button className='google-btn btn' onClick={ () => demoLogin(googleUser) }>
              <span className='icon-google'></span>
              CONTINUE WITH GOOGLE
            </button>
            <div className='divider'>
              <strong className='divider-title'>OR</strong>
            </div>
            <ul className='form-error'>
              {errors.map(err => <li>{err}</li>)}
            </ul>
            <label className='form-labels'>Email address
              <input className='email-input' 
                    type="text" 
                    value={this.state.email} 
                    onChange={this.update('email')} 
                    placeholder='Email address'/>
            </label>
            <label className='form-labels'>Password
              <input className='password-input' 
                    type="password" 
                    onChange={this.update('password')} 
                    value={this.state.password}
                    placeholder='Password'/>
            </label>
            <div className='login-sect'>
              <div className='rmbr-btn'>
                <input type="checkbox" name="remember-me" className='remember btn' />
                <label htmlFor='remember-me' className='btn'>Remember me</label>
              </div>
              <input className='submit-btn btn' type="submit" value={form} onClick={this.handleSubmit}/>
            </div>
            <div className='divider'></div>
            <h2 className='form-labels acc-prompt'>{form === 'LOG IN' ? "Don't have " : "Already have " }an account?</h2>
            <button className='link-btn btn'><Link to={`/${altFormType}`}>{formLink}</Link></button>
          </form>
        </div>
      </div>
    )
  }
}

export default SessionForm;