import { LegalPage } from '@/pages/legal/LegalPage'
import { privacyPolicyContent } from '@/pages/legal/legalContent'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy')

  return <LegalPage content={privacyPolicyContent} />
}

export { PrivacyPolicy }
