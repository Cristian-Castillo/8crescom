import React, { Component } from 'react'
import './ContainerStyle.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Container extends Component {

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
                            <h1 style = {{paddingBottom:'20px'}} className = 'comingStyle'>Sign up today for updates.</h1>
                    </div>
                </div>
                <div className = 'row' >
                    <div className = 'rowFour' >
                        <Form className = 'formStyle' >
                            <div className = 'row emailButtonStyle'>
                                    <Form.Group className = 'inputStyle' controlId="formBasicEmail">
                                        <Form.Control className = 'emailInput' type="email" placeholder="Enter your email address" required/>
                                    </Form.Group>
                                    <Button className = 'submitButton' variant="primary" type="submit">
                                    Follow
                                    </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div style = {{backgroundColor:'white'}} className = 'row'>
                    <div className = 'rowFive'>
                        <h5><strong>8CRES</strong> is dedicated to improving homeownership for underrepresented communities.</h5>
                        <h5 style = {{paddingTop:'30px'}}><strong>Sign up with your email today</strong> to be one of the first to download the app and see how easy buying a home can be.</h5>
                    </div>
                </div>
                <div style = {{backgroundColor:'white'}} className = 'row'>
                        <h6 style = {{margin:'auto',color:'gray',paddingBottom:'5px'}}>8CRES 2020 ©</h6>
                </div>

            </div>
        )
    }
}
{/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}