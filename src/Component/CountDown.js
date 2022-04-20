import styled from 'styled-components'
import React from 'react'

export const CountDown = () => {
  return (
    <TimerContainer>
      <Timer>
        <Section>
         <p className='Count'>87</p>
         <p><small>Days</small></p>
         
          </Section>
          <span>:</span>
          <Section>
         <p className='Count'>87</p>
         <p><small>Hours</small></p>
         
          </Section>
          <span>:</span>
          <Section>
         <p className='Count'>87</p>
         <p><small>Minits</small></p>
         
          </Section>
          <span>:</span>
          <Section>
         <p className='Count'>87</p>
         <p><small>Second</small></p>
         
          </Section>
          
      </Timer>



    </TimerContainer>
  )
}
const TimerContainer = styled.div`

display: flex;
align-items: center;
justify-content:center;
width: 100%;
`
const Timer =styled.div`

border: 0.1px solid #5754542f;
border-radius: 15px;
display: flex;
width: 100%;

text-align: center;
justify-content:space-around;
span{
  font-size: 2.5rem;
}

`

const Section = styled.div`
justify-content:space-between;
.Count{
font-size: 2.5rem;
}
small{
  font-size: 0.8rem;
line-height: 10px;
}


}



`