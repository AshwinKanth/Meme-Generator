import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-left: 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`
export const Heading = styled.h1`
  font-size: 35px;
  font-family: 'Roboto';
  color: #35469c;
  font-weight: bold;
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  font-size: 13px;
  font-family: 'Open Sans';
  color: #7e858e;
  padding-bottom: 10px;
`
export const CustomInput = styled.input`
  font-size: 14px;
  height: 35px;
  font-family: 'Open Sans';
  color: #7e858e;
  padding: 10px;
  outline: none;
  margin-bottom: 15px;
`

export const CustomSelect = styled.select`
  font-size: 14px;
  height: 35px;
  font-family: 'Open Sans';
  color: #1e293b;
  padding: 10px;
  margin-bottom: 15px;
  height: 40px;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 16px;
  color: #1e293b;
  outline: none;
  font-family: 'Roboto';
`
export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
