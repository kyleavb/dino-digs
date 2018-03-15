import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
const style = {
  zDepth: 15,
  margin: 20,
}

class Home extends Component {
  render(){
    return(
      <div>
        <Paper style={style}>
        <div>
          <h1> Welcome to Cave! </h1>
        </div>
        <div>
          <p>Welcome to the most exclusive and robust destination cave rental service.  We offer a mirade of top quality rental options.</p>
        </div>
        <div>
          <div className='inline'>
            <img src='https://www.worldatlas.com/r/w728-h425-c728x425/upload/87/c2/99/640px-homo-floresiensis-cave.jpg' height='200' width='250' alt='caves'/>
          </div>
          <div className='inline'>
            <img src='https://www.worldatlas.com/r/w728-h425-c728x425/upload/87/c2/99/640px-homo-floresiensis-cave.jpg' height='200' width='250' alt='caves'/>
          </div>
        </div>
        <div>
          <div className='inline'>
            <img src='https://www.worldatlas.com/r/w728-h425-c728x425/upload/87/c2/99/640px-homo-floresiensis-cave.jpg' height='200' width='250' alt='caves'/>
          </div>
          <div className='inline'>
            <img src='https://www.worldatlas.com/r/w728-h425-c728x425/upload/87/c2/99/640px-homo-floresiensis-cave.jpg' height='200' width='250' alt='caves'/>
          </div>
        </div>
        </Paper>
      </div>
    )
  }
}

export default Home
