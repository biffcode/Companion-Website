'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-secondary-500 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary-400 mb-8">Last Updated: June 30, 2025</p>
            
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-8">
              <p className="text-secondary-500 font-medium">IMPORTANT NOTICE</p>
              <p className="text-secondary-400 text-sm mt-2">
                PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING THE AIOS COMPANION APPLICATION OR SERVICES, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE OUR APPLICATION OR SERVICES.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-secondary-400 mb-4">
              By downloading, installing, accessing, or using AIOS Companion ("Application" or "Services"), you agree to be bound by these Terms of Service ("Terms") in their entirety. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms, in which case "you" shall refer to such entity.
            </p>
            <p className="text-secondary-400 mb-6">
              AIOS Companion SA ("we", "our", "us", or "AIOS Companion") reserves the right, at our sole discretion, to modify or replace these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for changes. Your continued use of the Application after any such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-secondary-400 mb-4">
              AIOS Companion is an AI-powered automation application that runs locally on your device. It helps you automate repetitive tasks, organize files, process documents, and more without requiring coding knowledge.
            </p>
            <p className="text-secondary-400 mb-6">
              YOU ACKNOWLEDGE AND AGREE THAT THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE" BASIS. The Application may be updated, modified, or discontinued at any time without notice. We do not guarantee uninterrupted or error-free service, and we make no warranties or representations about the accuracy, reliability, or availability of the Application.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">3. User Accounts</h2>
            <p className="text-secondary-400 mb-4">
              To use certain features of the Application, you may need to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-400 space-y-2">
              <li>Providing accurate, current, and complete information when creating your account</li>
              <li>Maintaining the confidentiality and security of your account credentials</li>
              <li>All activities that occur under your account, regardless of whether you authorized such activities</li>
              <li>Promptly notifying us of any unauthorized use of your account or any other breach of security</li>
            </ul>
            <p className="text-secondary-400 mb-6">
              We reserve the right to suspend or terminate accounts, remove or edit content, or cancel orders at our sole discretion, without notice or liability, for any reason whatsoever, including without limitation if you breach these Terms or engage in fraudulent, abusive, or illegal activity.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">4. License and Restrictions</h2>
            <p className="text-secondary-400 mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use the Application for your personal or internal business purposes.
            </p>
            <p className="text-secondary-400 mb-4">
              YOU EXPRESSLY AGREE THAT YOU SHALL NOT:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-400 space-y-2">
              <li>Copy, modify, adapt, translate, or create derivative works of the Application</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to extract the source code, algorithms, methods, or techniques embodied in the Application</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
              <li>Use the Application for any illegal, unauthorized, or unethical purpose</li>
              <li>Transfer, sublicense, rent, lease, lend, or resell the Application</li>
              <li>Use the Application in a way that could damage, disable, overburden, or impair our services</li>
              <li>Attempt to gain unauthorized access to the Application or related systems or networks</li>
              <li>Use any automated means or interface not provided by us to access the Application</li>
              <li>Circumvent or disable any security or other technological features of the Application</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">5. Privacy and Data</h2>
            <p className="text-secondary-400 mb-6">
              Our Privacy Policy, available at <a href="/privacy-policy" className="text-primary-500 hover:underline">aioscompanion.com/privacy-policy</a>, and our Cookie Policy, available at <a href="/cookies" className="text-primary-500 hover:underline">aioscompanion.com/cookies</a>, describe how we collect, use, and share information. By using the Application, you acknowledge and agree to our collection and use of information as described in these policies.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">6. Intellectual Property</h2>
            <p className="text-secondary-400 mb-4">
              The Application, including all content, features, functionality, software, code, data, trademarks, service marks, trade names, logos, and interfaces, is owned by AIOS Companion SA and is protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-secondary-400 mb-6">
              Nothing in these Terms grants you any right, title, or interest in the Application, except for the limited license expressly set forth in Section 4. All rights not expressly granted to you are reserved by AIOS Companion SA and its licensors.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">7. User Content</h2>
            <p className="text-secondary-400 mb-4">
              The Application may allow you to create, upload, store, send, receive, or share content ("User Content"). You retain all rights in your User Content, but grant us a worldwide, non-exclusive, royalty-free, fully-paid, transferable, sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform, and display your User Content for the purpose of operating and improving the Application.
            </p>
            <p className="text-secondary-400 mb-4">
              YOU REPRESENT AND WARRANT THAT:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-400 space-y-2">
              <li>You own or have the necessary rights, licenses, consents, and permissions to your User Content</li>
              <li>Your User Content does not and will not infringe, violate, or misappropriate any third-party right</li>
              <li>Your User Content does not contain any material that is defamatory, obscene, unlawful, threatening, abusive, or otherwise objectionable</li>
              <li>Your User Content complies with these Terms and all applicable laws and regulations</li>
            </ul>
            <p className="text-secondary-400 mb-6">
              We reserve the right, but are not obligated, to review, monitor, or remove User Content at our sole discretion and at any time, for any reason, without notice to you.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-secondary-400 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLICATION AND ALL CONTENT, MATERIALS, INFORMATION, AND SERVICES PROVIDED IN CONNECTION WITH THE APPLICATION ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, OR COMPLETENESS.
            </p>
            <p className="text-secondary-400 mb-6">
              WITHOUT LIMITING THE FOREGOING, NEITHER AIOS COMPANION NOR ANY OF ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS WARRANT THAT: (A) THE APPLICATION WILL FUNCTION UNINTERRUPTED, SECURELY, OR BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (B) ANY ERRORS OR DEFECTS WILL BE CORRECTED; (C) THE APPLICATION IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (D) THE RESULTS OF USING THE APPLICATION WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="text-secondary-400 mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AIOS COMPANION SA, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE APPLICATION OR ANY CONTENT OR SERVICES PROVIDED IN CONNECTION WITH THE APPLICATION, REGARDLESS OF THE THEORY OF LIABILITY, WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT AIOS COMPANION HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
            </p>
            <p className="text-secondary-400 mb-6">
              IN JURISDICTIONS THAT DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CERTAIN DAMAGES, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">10. Indemnification</h2>
            <p className="text-secondary-400 mb-6">
              YOU AGREE TO DEFEND, INDEMNIFY, AND HOLD HARMLESS AIOS COMPANION SA, ITS AFFILIATES, LICENSORS, AND SERVICE PROVIDERS, AND ITS AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, LICENSORS, SUPPLIERS, SUCCESSORS, AND ASSIGNS FROM AND AGAINST ANY CLAIMS, LIABILITIES, DAMAGES, JUDGMENTS, AWARDS, LOSSES, COSTS, EXPENSES, OR FEES (INCLUDING REASONABLE ATTORNEYS' FEES) ARISING OUT OF OR RELATING TO YOUR VIOLATION OF THESE TERMS OR YOUR USE OF THE APPLICATION, INCLUDING, BUT NOT LIMITED TO, YOUR USER CONTENT, ANY USE OF THE APPLICATION'S CONTENT, SERVICES, AND PRODUCTS OTHER THAN AS EXPRESSLY AUTHORIZED IN THESE TERMS, OR YOUR USE OF ANY INFORMATION OBTAINED FROM THE APPLICATION.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">11. Governing Law and Jurisdiction</h2>
            <p className="text-secondary-400 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in Zurich, Switzerland, and you hereby consent to the personal jurisdiction and venue therein.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">12. Dispute Resolution</h2>
            <p className="text-secondary-400 mb-6">
              Any dispute, controversy, or claim arising out of or in relation to these Terms, including the validity, invalidity, breach, or termination thereof, shall be resolved by arbitration in accordance with the Swiss Rules of International Arbitration of the Swiss Arbitration Centre in force on the date on which the Notice of Arbitration is submitted. The number of arbitrators shall be one. The seat of the arbitration shall be Zurich. The arbitral proceedings shall be conducted in English.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">13. Termination</h2>
            <p className="text-secondary-400 mb-4">
              We may terminate or suspend your access to the Application immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className="text-secondary-400 mb-6">
              Upon termination, your right to use the Application will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">14. Severability</h2>
            <p className="text-secondary-400 mb-6">
              If any provision of these Terms is held to be unenforceable or invalid, such provision shall be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions shall continue in full force and effect.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">15. Waiver</h2>
            <p className="text-secondary-400 mb-6">
              The failure of AIOS Companion SA to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by AIOS Companion SA.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">16. Entire Agreement</h2>
            <p className="text-secondary-400 mb-6">
              These Terms, together with the Privacy Policy and any other legal notices published by AIOS Companion SA in connection with the Application, shall constitute the entire agreement between you and AIOS Companion SA concerning the Application and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between you and AIOS Companion SA.
            </p>
            
            <h2 className="text-2xl font-semibold text-secondary-500 mt-8 mb-4">17. Contact Information</h2>
            <p className="text-secondary-400 mb-2">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-secondary-400 mb-6">
              AIOS Companion SA<br />
              Email: contact@aioscompanion.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 