import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LENGUAGE } from './constants'
import { ArrowsIcon, CopyIcon, SpeakerIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

import { useDebounce } from './hooks/useDebounce'
import { useEffect } from 'react'
import { useTranslation } from './services/translate'

function App() {
  const { 
     fromLanguage,
     toLanguage,
     fromText,
     result,
     setFromLanguage,
     interchangeLanguages,
     setToLanguage,
     setFromText,
     setResult,
     loading 
    } = useStore()

    const debounceFromText = useDebounce(fromText)

    const handleClickBoard = () => {
      navigator.clipboard.writeText(result).catch(() => {})
    }

    const handleSpeak = () => {
      const utterance = new SpeechSynthesisUtterance(result)
      utterance.lang = toLanguage
      speechSynthesis.speak(utterance)
    }

    useEffect(() => {
      
      const translateText = async () => {
        if (debounceFromText === '') return
        
        const result = await useTranslation(debounceFromText, fromLanguage, toLanguage)
      
        if (!result){
          return setResult('Error translating text')
        }

        setResult(result)
      }

      translateText() 
  }, [debounceFromText, fromLanguage, toLanguage])

  return (
    <Container fluid>
      <h2 className='title'>Google <span className='title-span'>Translate</span></h2>
      
      <Row>
        
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.From}
              value={ fromLanguage }
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              autoFocus
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs={'auto'} >
          <Button 
            variant='link' 
            disabled={fromLanguage === AUTO_LENGUAGE} 
            onClick={interchangeLanguages}
          >
            <ArrowsIcon/>
          </Button>
        </Col>
        
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <div style={{ position: 'relative'}}>
              <TextArea
                loading ={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />
              <div className='textareas-response-buttons'>
                <Button 
                  variant='link' 
                  onClick={handleClickBoard}>
                  <CopyIcon/>
                </Button>

                <Button 
                  variant='link' 
                  onClick={handleSpeak}>
                  <SpeakerIcon/>
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      
      </Row>
      
    </Container>
  )
}

export default App
