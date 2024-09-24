import { AUTO_LENGUAGE } from "../constants"

export async function useTranslation(text: string, fromLang: string, targetLang: string): Promise<string | undefined> {
    const apiKey: string = import.meta.env.VITE_DEEPL_API_KEY as string
    const url: string = 'https://api-free.deepl.com/v2/translate'
    
    const fromLangToUse = fromLang === AUTO_LENGUAGE ? '' : `&source_lang=${fromLang}`

    const fetchTranslation = async (): Promise<string | undefined> => {
        const fullUrl = `${url}?auth_key=${apiKey}&text=${encodeURIComponent(text)}${fromLangToUse}&target_lang=${targetLang}`
        console.log(fullUrl)

        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })

            if (!response.ok) {
                throw new Error(`Error translating text: ${response.statusText}`)
            }

            const data = await response.json()
            return data.translations[0].text
        } catch (error) {
            console.error('Error translating text:', error)
            return undefined // Devuelve undefined en caso de error
        }
    }

    const translatedText = await fetchTranslation()
    return translatedText 
}
