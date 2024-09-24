import { AUTO_LENGUAGE } from '../constants';
import { Action, FromLanguage, Language, type State } from '../types';
import { useReducer } from 'react';

// 1 create a initialState
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  toText: '',
  loading: false,
  result: ''
}

// 2 create a reducer function
function reducer(state: typeof initialState, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    if(state.fromLanguage === AUTO_LENGUAGE) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      fromText: state.result,
      result: state.fromText,
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }
  
  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''
    return {
      ...state,
      fromText: action.payload,
      result: '',
      loading,
    }
  }

  if (type === 'SET_RESULT'){
    return {
      ...state,
      result: action.payload
    }
  }
  return state
}

export function useStore(){
  // 3. use the hook useReducer
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)
 
  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

	const setFromLanguage = (payload: FromLanguage) => {
		dispatch({ type: 'SET_FROM_LANGUAGE', payload })
	}

	const setToLanguage = (payload: Language) => {
		dispatch({ type: 'SET_TO_LANGUAGE', payload })
	}

	const setFromText = (payload: string) => {
		dispatch({ type: 'SET_FROM_TEXT', payload })
	}

	const setResult = (payload: string) => {
		dispatch({ type: 'SET_RESULT', payload })
	}

  return { 
    fromLanguage,
		toLanguage,
    fromText,
    result,
    toText,
    loading,
    interchangeLanguages,
		setFromLanguage,
		setToLanguage,
		setFromText,
		setResult
	}
}