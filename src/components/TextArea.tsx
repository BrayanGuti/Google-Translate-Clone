import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

interface Props { 
    type: SectionType
    autoFocus?: boolean
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

const commonStyles = { 
    border: 0, 
    height: '200px',
    // resize: 'none', 
}

const getPlaceholder = ({ type, loading }: {type: SectionType, loading?: boolean}) => {
    if (loading) return 'Loading...'
    return type === SectionType.From ? 'Enter text' : 'Translation'
}

export const TextArea = ({ type, autoFocus, loading, value, onChange }: Props) => {
    const style = type === SectionType.To
    ? { ...commonStyles, backgroundColor: '#f5f5f5' } 
    : commonStyles

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control
            as='textarea'
            disabled={type === SectionType.To}
            autoFocus={type === SectionType.From  && autoFocus}
            placeholder={getPlaceholder({ type, loading })}
            style={style}
            value={value}
            onChange={handleChange}
        />
    )
}