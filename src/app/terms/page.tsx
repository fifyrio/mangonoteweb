import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Mango AI Note',
  description: 'Terms and conditions for Mango AI Note application.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms &amp; Conditions</h1>
            
            <div className="prose prose-gray max-w-none">
              <p>
                These terms and conditions apply to the AI Note Taker: MangoNote app (hereby referred to as "Application") 
                for mobile devices that was created by Wei Wu (hereby referred to as "Service Provider") as a Free service.
              </p>

              <p>
                Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. 
                It is strongly advised that you thoroughly read and understand these terms prior to using the Application. 
                Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is 
                strictly prohibited. Any attempts to extract the source code of the Application, translate the Application 
                into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database 
                rights, and other intellectual property rights related to the Application remain the property of the Service Provider.
              </p>

              <p>
                The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. 
                As such, they reserve the right to modify the Application or charge for their services at any time and for any 
                reason. The Service Provider assures you that any charges for the Application or its services will be clearly 
                communicated to you.
              </p>

              <p>
                The Application stores and processes personal data that you have provided to the Service Provider in order to 
                provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. 
                The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software 
                restrictions and limitations imposed by the official operating system of your device. Such actions could expose 
                your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in 
                the Application not functioning correctly or at all.
              </p>

              <div className="my-6">
                <p>
                  Please note that the Application utilizes third-party services that have their own Terms and Conditions. 
                  Below are the links to the Terms and Conditions of the third-party service providers used by the Application:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    <a 
                      href="https://www.google.com/analytics/terms/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Google Analytics for Firebase
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://firebase.google.com/terms/crashlytics" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Firebase Crashlytics
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.revenuecat.com/terms" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      RevenueCat
                    </a>
                  </li>
                </ul>
              </div>

              <p>
                Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions 
                of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network 
                provider. The Service Provider cannot be held responsible if the Application does not function at full capacity 
                due to lack of access to Wi-Fi or if you have exhausted your data allowance.
              </p>

              <p>
                If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's 
                agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during 
                the connection to the application, or other third-party charges. By using the application, you accept responsibility 
                for any such charges, including roaming data charges if you use the application outside of your home territory 
                (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which 
                you are using the application, they assume that you have obtained permission from the bill payer.
              </p>

              <p>
                Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, 
                it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you 
                are unable to access the Service, the Service Provider cannot be held responsible.
              </p>

              <p>
                In terms of the Service Provider's responsibility for your use of the application, it is important to note that 
                while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide 
                information to them so that they can make it available to you. The Service Provider accepts no liability for any 
                loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.
              </p>

              <p>
                The Service Provider may wish to update the application at some point. The application is currently available as 
                per the requirements for the operating system (and for any additional systems they decide to extend the availability 
                of the application to) may change, and you will need to download the updates if you want to continue using the 
                application. The Service Provider does not guarantee that it will always update the application so that it is 
                relevant to you and/or compatible with the particular operating system version installed on your device. However, 
                you agree to always accept updates to the application when offered to you. The Service Provider may also wish to 
                cease providing the application and may terminate its use at any time without providing termination notice to you. 
                Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms 
                will end; (b) you must cease using the application, and (if necessary) delete it from your device.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to These Terms and Conditions</h2>
              <p>
                The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review 
                this page regularly for any changes. The Service Provider will notify you of any changes by posting the new 
                Terms and Conditions on this page.
              </p>
              <p>These terms and conditions are effective as of 2025-07-15</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact 
                the Service Provider at support@chat-mentor.com.
              </p>

              <hr className="my-8" />
              <p className="text-sm text-gray-600">
                This Terms and Conditions page was generated by{' '}
                <a 
                  href="https://app-privacy-policy-generator.nisrulz.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  App Privacy Policy Generator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}