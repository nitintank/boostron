import React from 'react'
import Link from "next/link";

export const metadata = {
  title: 'Disclaimer',
  description:
    'Disclaimer',
  keywords: [
    'Disclaimer',
  ],
  authors: [{ name: 'Disclaimer' }],
  alternates: {
    canonical: '',
  },
  other: {
    'content-language': 'en-us'
  },
  openGraph: {
    url: '',
    type: 'website',
    title: 'Disclaimer',
    description:
      'Disclaimer',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Disclaimer',
      },
    ],
  }
};

export default function Disclaimer() {

  return (
    <div>
      {/* Header Navigation */}
      <header id="top" className="header">
        <div className="header-container">
          <div className="logo">
            <h2 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.8rem' }}>Boostron®</h2>
          </div>
          <div className="newHeadBox">
            <nav className="nav-links">
              <Link href="/#how-it-works">How It Works?</Link>
              <Link href="/#ingredients">Ingredients</Link>
              <Link href="/#benefits">Benefits</Link>
            </nav>
            <Link href="#order" className="order-button">Order Now</Link>
          </div>
        </div>
      </header>
      {/* upper Line */}
      <h1 className="product-title">Disclaimer</h1>
      <p className="para-privacy-page">
        <strong>Disclaimer for The EndoPeak,</strong>
        <br /><br />
        If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at info@EndoPeak.com
        <br /><br />
        All the information on this website – https://EndoPeak.com/ – is published in good faith and for general information purpose only. EndoPeak does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (EndoPeak), is strictly at your own risk. EndoPeak will not be liable for any losses and/or damages in connection with the use of our website.
        <br /><br />
        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.
        <br /><br />
        Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control.
        <br /><br />
        Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.
        <br /><br />
        <strong>Consent</strong>
        <br /><br />
        By using our website, you hereby consent to our disclaimer and agree to its terms.
        <br /><br />
        <strong>Update</strong>
        <br /><br />
        Should we update, amend or make any changes to this document, those changes will be prominently posted here.
      </p>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-disclaimer">
          <p>Please note that the information we provide is not intended to replace consultation with a qualified medical professional. We encourage you to inform your physician of changes you make to your lifestyle and discuss these with him or her. For questions or concerns about any medical conditions you may have, please contact your doctor.</p>
          <p>Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.</p>
          <p>The website’s content and the product for sale is based upon the author’s opinion and is provided solely on an “AS IS” and “AS AVAILABLE” basis. You should do your own research and confirm the information with other sources when searching for information regarding health issues and always review the information carefully with your professional health care provider before using any of the protocols presented on this website and/or in the product sold here.</p>
          <p>ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 South Entertainment Ave, Suite 410, Boise, Idaho, 83709, USA and used by permission. ClickBank’s role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products. *For international shipping (outside of the United States), shipping fees will apply.</p>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <Link href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
            <Link href="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
            <Link href="#"><i className="fab fa-pinterest" aria-hidden="true"></i></Link>
            <Link href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link>
            <Link href="#"><i className="fab fa-quora" aria-hidden="true"></i></Link>
            <Link href="#"><i className="fab fa-tumblr" aria-hidden="true"></i></Link>
          </div>

          <div className="footer-links">
            <Link href="/disclaimer">Disclaimer</Link> |
            <Link href="/terms-and-conditions">Terms of Use</Link> |
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>

          <div className="footer-copy">
            &copy; Copyright 2025. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}