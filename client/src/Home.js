import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
const style = {
  zDepth: 15,
  margin: 20,
}

class Home extends Component {
  render(){
    return(
      <div className='row'>
        <Paper style={style}>
        <div className='col s6 m6 l6 offset-s3 offset-m3 offset-l3 text-bg z-depth-3'>
            <h1> Welcome to Cave! </h1>
            <p className='col s8 m8 l8 offset-s2 offset-m2 offset-l2'>Welcome to the most exclusive and robust destination cave rental service.  We offer a myriad of top quality rental options.</p>
            <br/>
          <div className='row'>
            <div className='col s6 m6 l6'>
              <img src='https://www.worldatlas.com/r/w728-h425-c728x425/upload/87/c2/99/640px-homo-floresiensis-cave.jpg' height='200' width='250' alt='caves'/>
            </div>
            <div className='col s6 m6 l6'>
              <img src='https://www.worldatlas.com/r/w728-h425-c728x425/upload/87/c2/99/640px-homo-floresiensis-cave.jpg' height='200' width='250' alt='caves'/>
            </div>
          </div>
          <div className='row'>
            <div className='col s6 m6 l6'>
              <img src='https://www.worldatlas.com/r/w728-h425-c728x425/upload/87/c2/99/640px-homo-floresiensis-cave.jpg' height='200' width='250' alt='caves'/>
            </div>
            <div className='col s6 m6 l6'>
              <img src='https://www.worldatlas.com/r/w728-h425-c728x425/upload/87/c2/99/640px-homo-floresiensis-cave.jpg' height='200' width='250' alt='caves'/>
            </div>
          </div>
        </div>
        </Paper>
      </div>
    )
  }
}

export default Home
