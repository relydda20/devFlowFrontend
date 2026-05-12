import { LegalPage } from '@/pages/legal/LegalPage'
import { termsOfServiceContent } from '@/pages/legal/legalContent'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

function TermsOfService() {
  useDocumentTitle('Terms of Service')

  return <LegalPage content={termsOfServiceContent} />
}

export { TermsOfService }
