import { Form } from 'react-bootstrap';
import { SUPPORTED_LANGUAGES } from '../constants';
import { SectionType, type FromLanguage, type Language } from '../types.d';
import { AUTO_LENGUAGE } from '../constants';

// interface Props {
// 		onChange: (language: Language) => void
// }

type Props =
 |{type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
 |{type: SectionType.To, value: Language, onChange: (language: Language) => void}

export const LanguageSelector = ({ onChange, value, type }: Props) => {
		const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
			onChange(event.target.value as Language)
		}	

    return (
        <Form.Select aria-label='Selecciona el idioma' as='select' onChange={handleChange} value={value	}>
			
			{ type === SectionType.From && <option value={AUTO_LENGUAGE}>Detect language</option> }

			{Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
				<option key={key} value={key}>
					{literal}
				</option>
			))}
		</Form.Select>
    )
}