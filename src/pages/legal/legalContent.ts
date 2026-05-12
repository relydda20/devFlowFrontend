export type LegalSection = {
  heading: string
  body: string[]
}

export type LegalPageContent = {
  title: string
  description: string
  effectiveDate: string
  sections: LegalSection[]
}

export const privacyPolicyContent: LegalPageContent = {
  title: 'Privacy Policy',
  description:
    'How DevFlow handles product analytics, local app usage, and support requests.',
  effectiveDate: 'May 12, 2026',
  sections: [
    {
      heading: 'What we collect',
      body: [
        'DevFlow may collect product usage signals such as route visits, feature interactions, and basic app performance information.',
        'We do not intentionally collect source code, API keys, or private chat content through the marketing website.',
      ],
    },
    {
      heading: 'How we use information',
      body: [
        'We use collected information to improve product reliability, understand which pages are visited, and respond to support requests.',
        'Analytics data is used in aggregate to help the team prioritize improvements.',
      ],
    },
    {
      heading: 'Data retention and security',
      body: [
        'We retain information only for as long as needed to support the product or resolve a request.',
        'Reasonable safeguards are used to protect the website and its associated records.',
      ],
    },
    {
      heading: 'Contact',
      body: [
        'For privacy questions, open an issue in the DevFlow repository at github.com/relydda20/devFlowExtension.',
      ],
    },
  ],
}

export const termsOfServiceContent: LegalPageContent = {
  title: 'Terms of Service',
  description:
    'The terms that apply when visiting the DevFlow website and using product materials.',
  effectiveDate: 'May 12, 2026',
  sections: [
    {
      heading: 'Acceptance of terms',
      body: [
        'By accessing the DevFlow website, you agree to these terms and any additional policies referenced on the site.',
      ],
    },
    {
      heading: 'Permitted use',
      body: [
        'You may use the website for lawful, personal, and internal business evaluation purposes.',
        'You must not misuse the site, attempt to disrupt it, or use it in a way that violates applicable law.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'The DevFlow name, branding, and site content remain the property of the project owners unless stated otherwise.',
      ],
    },
    {
      heading: 'Limitation of liability',
      body: [
        'The website is provided on an as-is basis and may change without notice.',
        'To the extent allowed by law, the project owners are not liable for indirect or incidental damages arising from site use.',
      ],
    },
    {
      heading: 'Contact',
      body: [
        'For terms questions, open an issue in the DevFlow repository at github.com/relydda20/devFlowExtension.',
      ],
    },
  ],
}
