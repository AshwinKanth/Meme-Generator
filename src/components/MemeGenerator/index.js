import {Component} from 'react'
import {
  AppContainer,
  Heading,
  FormAndMemeContainer,
  FormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  CustomButton,
  MemeContainer,
  TextContent,
  MemeGeneratorContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    backgroundImageUrl: '',
    topTextInput: '',
    topText: '',
    bottomTextInput: '',
    bottomText: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    activeFontSizeId: '',
  }

  onChangeBgImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
    // console.log(event.target.value)
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
    // console.log(event.target.value)
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderFormContainer = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    // console.log(topTextInput)
    return (
      <FormContainer onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image Url</CustomLabel>
        <CustomInput
          id="backgroundImageUrl"
          type="text"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBgImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          type="text"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          id="bottomText"
          type="text"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeActiveOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomButton type="submit">Generate</CustomButton>
      </FormContainer>
    )
  }

  renderMemeContainer = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMemeContainer()}
            {this.renderFormContainer()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
