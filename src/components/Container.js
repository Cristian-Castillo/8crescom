import React, { Component } from 'react'
import './ContainerStyle.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from '../axios-oders'

export default class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
          input: '',
          submit: '',
          wasClicked:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({
          input: event.target.value
        });
      }
      handleSubmit(event) {
        event.preventDefault()

        const clicked = !this.state.wasClicked
        this.setState({
          submit: this.state.input,
          wasClicked:clicked
        });

        const userInformation = {
            userEmail:this.state.input,
            userTimeStamp:Date.now()
        }
        axios.post('/orders.json', userInformation)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
        this.setState({
            input:'',
        })
      }

    render() {

        return (
            <div className = 'container-fluid'>
                {/*White row on top page*/}
                <div className = 'row rowOne'></div>
                    {/*Center Text 8Cres in middle of background pic */}
                    <div style = {{marginTop:'100px'}}classNme = 'row'>
                        <div className = 'rowTwo'>
                            <h2 className = 'innerTextStyle'><strong>8CRES.</strong></h2>
                            <h3 className = 'innerTextStyle'><strong>The home ownership plug.</strong></h3>
                        </div>
                    </div>
                    {/*Bottom Master row containing information */}
                <div className = 'row'>
                    {/*Container Coming soon and Sign up for today*/}
                        <div className = 'rowThree'>
                            <img className = 'imgCres' src = 'https://8crescom.files.wordpress.com/2020/08/icon-app-60x60403x.png?w=180' alt ='8CRES LOGO'/>
                            <h1 className = 'comingStyle'>Coming soon.</h1>
                            <h1 style = {{paddingBottom:'20px'}} className = 'comingStyle'>{this.state.wasClicked === true ? `Thank you for signing up ${this.state.submit}` : 'Sign up today for updates.'}</h1>
                        </div>
                    </div>
                <div className = 'row'  style = {{borderStyle:'none',backgroundColor:'white',height:'100px'}}>
                    <div style = {{margin:'auto',width:'100%',borderStyle:'none',backgroundColor:'white'}}>
                        <Form onSubmit={this.handleSubmit} >
                            <div className = 'row emailButtonStyle' style = {{borderStyle:'none',width:'100%'}}>
                                <Form.Group className = 'inputStyle' >
                                    <Form.Control value={this.state.input} onChange={this.handleChange} className = 'emailInput' type="email" placeholder="Enter your email address" required/>
                                </Form.Group>
                                <Button className = 'submitButton' variant="primary" type="submit">
                                Follow
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div style = {{backgroundColor:'white',marginTop:'-5px'}} className = 'row'>
                    <div className = 'rowFive' >
                        <h5 style = {{paddingLeft:'12px',paddingRight:'12px'}}><strong><i>8CRES</i></strong> is dedicated to improving homeownership for underrepresented communities.</h5>
                        <h5 style = {{paddingTop:'30px'}}><strong>Sign up today for updates.</strong> to be one of the first to download the app and see how easy buying a home can be.</h5>
                    </div>
                </div>
                <div style = {{backgroundColor:'white',paddingLeft:'12px',paddingRight:'12px'}} className = 'row'>
                    <h6 style = {{margin:'auto',color:'gray',paddingBottom:'5px'}}>8CRES 2020 ©</h6>
                </div>
            </div>
        )
    }
}