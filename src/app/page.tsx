'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Images for showcase section (replace with actual image paths and links)
  // State to control mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

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
              <a href="#how-it-works">How It Works?</a>
              <a href="#ingredients">Ingredients</a>
              <a href="#benefits">Benefits</a>
            </nav>
            <a href="#order" className="order-button">Order Now</a>
          </div>
          <button className="mobile-menu-icon" onClick={() => setIsSidebarOpen(true)} aria-label="Open Menu">☰</button>
        </div>
      </header>
      {/* Mobile Sidebar */}
      <aside className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)} aria-label="Close Menu">×</button>
        <nav className="sidebar-nav">
          <a href="#how-it-works" onClick={() => setIsSidebarOpen(false)}>How It Works?</a>
          <a href="#ingredients" onClick={() => setIsSidebarOpen(false)}>Ingredients</a>
          <a href="#benefits" onClick={() => setIsSidebarOpen(false)}>Benefits</a>
        </nav>
        <a href="#order" className="order-button mobile-button" onClick={() => setIsSidebarOpen(false)}>Order Now</a>
      </aside>
      <div className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>

      {/* upper Line */}
      <h1 className="product-title">Boostron® USA: Unleash Your Inner Power Now!</h1>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="product-image">
          <Image
            src="/images/boostron-removebg-preview.png"
            alt="Boostron Supplement Bottle"
            width={450}
            height={450}
            priority
          />
        </div>
        <div className="product-info">
          {/* <h1 className="product-title">Boostron® USA: Unleash Your Inner Power Now!</h1> */}
          <p className="product-description">
            Press the Boostron key to ignite your masculinity with a natural, high-potency formula that transforms your performance! Powered by a premium blend of <strong>Tongkat Ali, Maca, Asian Ginseng, and Tribulus Terrestris</strong>. Boostron skyrockets testosterone, supercharges energy, and amplifies stamina—without synthetic additives. Don't settle for ordinary. Unlock extraordinary vitality today!
          </p>
          <h3 style={{ fontSize: '1.rem' }}>Why Boostron is Your Game-Changer:</h3>
          <ul className="benefits-lists">
            <li>Sparks rock-hard, lasting erections for unmatched confidence</li>
            <li>Fuels explosive energy and laser sharp focus all day</li>
            <li>Ignites libido and raw physical strength</li>
            <li>Accelerates muscle growth and rapid recovery</li>
            <li>Proudly crafted in the USA with premium, non-GMO ingredients</li>
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <a href="#order" className="cta-button">Claim Your Exclusive Discount Now!</a>
            <a href="#learn-more" className="secondary-button">Join the Boostron Revolution Today!</a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications" id="why-choose">
        <h2>Why Choose Boostron?</h2>
        <div className="certification-badges">
          <div className="badge">
            <Image src="/images/made-in-usa.png" alt="Made in USA" width={250} height={250} style={{ objectFit: 'contain' }} />
            <h3 className="badge-title">MADE IN THE USA</h3>
            <p className="badge-description">Boostron is proudly manufactured in the USA with strict quality control.</p>
          </div>
          <div className="badge">
            <Image src="/images/all-natural-ingredients-removebg-preview.png" alt="100% Natural" width={250} height={250} style={{ objectFit: 'contain' }} />
            <h3 className="badge-title">100% NATURAL</h3>
            <p className="badge-description">All ingredients in Boostron are pure, natural, and carefully sourced.</p>
          </div>
          <div className="badge">
            <Image src="/images/gmp-certified-removebg-preview.png" alt="GMP Certified" width={250} height={250} style={{ objectFit: 'contain' }} />
            <h3 className="badge-title">GMP CERTIFIED</h3>
            <p className="badge-description">Boostron is manufactured following Good Manufacturing Practices to ensure high quality.</p>
          </div>
          <div className="badge">
            <Image src="/images/fda-approved-removebg-preview.png" alt="FDA Approved" width={250} height={250} style={{ objectFit: 'contain' }} />
            <h3 className="badge-title">FDA APPROVED</h3>
            <p className="badge-description">Boostron is manufactured in an FDA certified facility, meeting the highest health standards.</p>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-details" id="what-is">
        <h2>What is Boostron?</h2>
        <div className="product-details-content" style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p>
              Boostron is your key to activating peak male performance with a natural, high-potency formula. Its powerful blend of botanicals, nutrients, and minerals energizes men from the core, reigniting stamina and strength.
            </p>
            <p>
              Boostron supercharges <span className="ingredients-highlight">blood flow</span> with <span className="ingredients-highlight">Niacin, Horny Goat Weed, and Ginkgo Biloba</span>, ensuring strong circulation for firmer, longer-lasting erections and optimal performance.
            </p>
            <p>
              To reverse testosterone decline, <span className="ingredients-highlight">Tribulus Terrestris, Tongkat Ali, and Asian Ginseng</span> trigger natural hormone production, boosting libido, muscle power, and confidence without synthetic additives.
            </p>
            <p>
              For unstoppable energy, <span className="ingredients-highlight">L-Carnitine, Berberine, and Magnesium</span> spark metabolism, combat fatigue, and fuel endurance, keeping you powered from morning to night.
            </p>
            <p>
              Cleansing ingredients like <span className="ingredients-highlight">Cranberry and Bearberry Extract</span> detoxify the system, promote prostate health, and reduce inflammation, making Boostron a holistic men's wellness solution.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Image
              src="/images/boostron-supplement-removebg-preview.png"
              alt="Boostron Supplement Bottle"
              width={300}
              height={400}
              style={{ width: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* How Does Boostron Work Section */}
      <section className="how-it-works" id="how-it-works">
        <h2>How Does Boostron Work?</h2>
        <div className="how-it-works-content">
          <p className="how-it-works-intro">
            Boostron is your key to activating male vitality with a potent, natural formula. Here's how it delivers powerful results:
          </p>
          <div className="how-it-works-steps">
            <div className="how-it-works-step">
              <h3 className="step-title">1. Amplifies Blood Flow for Stronger Erections:</h3>
              <p className="step-description">
                Niacin, Horny Goat Weed, and Ginkgo Biloba act as natural vasodilators, widening blood vessels to boost circulation. This fuels firmer, longer-lasting erections for peak intimate performance.
              </p>
            </div>
            <div className="how-it-works-step">
              <h3 className="step-title">2. Sparks Testosterone Production:</h3>
              <p className="step-description">
                Tribulus Terrestris, Tongkat Ali, and Maca Root ignite natural testosterone production, powering libido, muscle strength, and confidence without synthetic hormones.
              </p>
            </div>
            <div className="how-it-works-step">
              <h3 className="step-title">3. Fuels Energy and Stamina:</h3>
              <p className="step-description">
                L-Carnitine and Rhodiola Rosea enhance metabolism, converting fat into energy and reducing fatigue for sustained physical performance all day.
              </p>
            </div>
            <div className="how-it-works-step">
              <h3 className="step-title">4. Boosts Mood and Mental Clarity:</h3>
              <p className="step-description">
                Muira Puama and Asian Ginseng reduce stress, sharpen focus, and elevate motivation, helping men overcome age-related fatigue and mood swings.
              </p>
            </div>
            <div className="how-it-works-step">
              <h3 className="step-title">5. Sustains Long-Term Vitality:</h3>
              <p className="step-description">
                Daily Boostron use builds enduring wellness, enhancing sexual health, physical strength, and masculinity with consistent, long-term results.
              </p>
            </div>
          </div>
          <p style={{ marginTop: '20px', fontSize: '24px', color: '#000', fontWeight: 'bold' }} className="step-below-para">
            Crafted in a <span className="ingredients-highlight">GMP-certified, FDA-registered facility</span> in the USA, this non-GMO formula is free of harmful chemicals and stimulants. One capsule daily activates enhanced stamina, confidence, and satisfaction.
          </p>
          <div className="cta-section">
            <a href="#order" className="cta-button">
              Activate Boostron with a Discount Today
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="customer-reviews" id="reviews">
        <h2>Boostron Customer Reviews</h2>
        <div className="reviews-container">
          <div className="review">
            {/* <div className="verified-badge">
              <span>Verified Purchase</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div> */}
            <div className="reviewer-profile">
              <div className="reviewer-image">
                <div style={{ width: '90px', height: '90px', borderRadius: '10%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <Image
                    src="/images/review-img-1.webp"
                    alt="Boostron Supplement Bottle"
                    width={90}
                    height={90}
                    style={{ width: 'auto' }}
                  />
                </div>
              </div>
              <div className="reviewer-info">
                <div className="verified-badge">
                  <span>Verified Purchase</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <h4>Peter H. – Austin, TX, USA</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">
              "I was skeptical at first, but Boostron exceeded my expectations. It not only improved my energy but also boosted my confidence in ways I hadn't anticipated. The ingredients are top-notch, and I love that it's made in a GMP-certified facility. Definitely a product I'll keep using!"
            </p>
          </div>

          <div className="review">
            {/* <div className="verified-badge">
              <span>Verified Purchase</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div> */}
            <div className="reviewer-profile">
              <div className="reviewer-image">
                <div style={{ width: '90px', height: '90px', borderRadius: '10%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <Image
                    src="/images/review-img-2.webp"
                    alt="Boostron Supplement Bottle"
                    width={90}
                    height={90}
                    style={{ width: 'auto' }}
                  />
                </div>
              </div>
              <div className="reviewer-info">
                <div className="verified-badge">
                  <span>Verified Purchase</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <h4>James L. – Seattle, WA, USA</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">
              "I've tried numerous supplements before, but Boostron stands out. Within weeks, my energy levels skyrocketed, and I felt more confident both physically and mentally. The best part is knowing it's all natural—no side effects, just results. Highly recommend it to anyone looking to regain their vitality!"
            </p>
          </div>

          <div className="review">
            {/* <div className="verified-badge">
              <span>Verified Purchase</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div> */}
            <div className="reviewer-profile">
              <div className="reviewer-image">
                <div style={{ width: '90px', height: '90px', borderRadius: '10%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <Image
                    src="/images/review-img-3.webp"
                    alt="Boostron Supplement Bottle"
                    width={90}
                    height={90}
                    style={{ width: 'auto' }}
                  />
                </div>
              </div>
              <div className="reviewer-info">
                <div className="verified-badge">
                  <span>Verified Purchase</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <h4>Mark T. – Miami, FL, USA</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">
              "Boostron has been a game-changer for me. I was struggling with low stamina and fatigue, but after using this supplement, I feel like I'm in my 20s again. My workouts are more intense, and I've noticed a big improvement in my overall mood and focus. Worth every penny!"
            </p>
          </div>
        </div>
      </section>



      {/* Image Grid Section */}
      <section className="image-grid-section">
        <h2>Claim Your Discounted Boostron !
          <br></br>Below For Huge Savings</h2>
        <div className="off-white-background">
          <div className="buying-background p-4 g-arrow"></div>
        </div>
        {/* <div className="image-row">
          {firstRowImages.map((img, index) => (
            <a key={index} href={img.link} className="image-link">
              <Image src={img.src} alt={`Showcase ${index + 1}`} width={2000} height={2000} />
            </a>
          ))}
        </div> */}
        {/* <div className="image-row center-row">
          <a href={secondRowImage.link} className="image-link">
            <Image src={secondRowImage.src} alt="Showcase Center" width={2000} height={2000} />
          </a>
        </div> */}
        <div className="pricing-container">

          <div className="product-card">
            <div className="header header-1x">
              1 X BOTTLE
              <span className="supply-days">30 DAY SUPPLY</span>
            </div>
            <div className="card-content">
              <Image src="/images/prod-1.png" alt="LungExpand Pro 1 Bottle" className="product-image-new" width={200} height={200} />
              <div className="price-section">
                <span className="current-price">$69</span>
                <span className="per-bottle">/ Bottle</span>
              </div>
              <button className="buy-now-btn">BUY NOW</button>
              <div className="total-price">
                TOTAL: <span className="original-total">$99</span> <span className="discounted-total">$69</span>
              </div>
              <div className="payment-methods">
                <Image src="/images/credit-cards.png" alt="Credit Card" width={150} height={150} style={{ width: 'auto' }} />
              </div>
            </div>
          </div>

          <div className="product-card best-value">
            <div className="header header-6x">
              6 X BOTTLES
              <span className="supply-days">180 DAY SUPPLY</span>
            </div>
            <div className="card-content">
              <Image src="/images/prod-2.png" alt="LungExpand Pro 1 Bottle" className="product-image-new" width={200} height={200} />
              <div className="price-section">
                <span className="current-price">$49</span>
                <span className="per-bottle">/ Bottle</span>
              </div>
              <div className="ebooks">+ 2 FREE EBOOKS!</div>
              <button className="buy-now-btn">BUY NOW</button>
              {/* <div className="shipping">FREE Shipping</div> */}
              <div className="total-price">
                TOTAL: <span className="original-total">$594</span> <span className="discounted-total">$294</span>
              </div>
              <div className="payment-methods">
                <Image src="/images/credit-cards.png" alt="Credit Card" width={150} height={150} style={{ width: 'auto' }} />
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="header header-3x">
              3 X BOTTLES
              <span className="supply-days">90 DAY SUPPLY</span>
            </div>
            <div className="card-content">
              <Image src="/images/prod-3.png" alt="LungExpand Pro 1 Bottle" className="product-image-new" width={200} height={200} />
              <div className="price-section">
                <span className="current-price">$59</span>
                <span className="per-bottle">/ Bottle</span>
              </div>
              <button className="buy-now-btn">BUY NOW</button>
              <div className="total-price">
                TOTAL: <span className="original-total">$297</span> <span className="discounted-total">$177</span>
              </div>
              <div className="payment-methods">
                <Image src="/images/credit-cards.png" alt="Credit Card" width={150} height={150} style={{ width: 'auto' }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Free Bonus Section */}
      <section className="bonuses-section">
        <h2>Order 6 Bottles or 2 Bottles And Get 2 Free Bonuses !</h2>
        <section className="ebook-bonus-section">
          <div className="ebook-card">
            <Image src="/images/book-1.webp" alt="Credit Card" width={250} height={250} style={{ width: 'auto' }} />
            <div className="ebook-text">
              <strong>(Bonus #2) Renew You – 100% Free</strong>
              Retail Price - $79<br />
              <strong>Today: FREE</strong>
              <p>
                Renew You is a holistic wellness program designed to rejuvenate both your body and mind.
                This program helps you achieve a balanced and healthier lifestyle by focusing on key areas like
                nutrition, exercise, mindfulness, and self-care.
              </p>
            </div>
          </div>

          <div className="ebook-card">
            <Image src="/images/book-2.webp" alt="Credit Card" width={250} height={250} style={{ width: 'auto' }} />
            <div className="ebook-text">
              <strong>(Bonus #1) 1-Day Kickstart Detox – 100% Free</strong>
              Retail Price - $79<br />
              <strong>Today: FREE</strong>
              <p>
                A 1-day detox is a simple yet effective way to reset your body and mind. Start your day by drinking a
                glass of warm water with lemon to jumpstart your metabolism. Engage in light exercises like yoga or a
                brisk walk to stimulate blood flow.
              </p>
            </div>
          </div>
        </section>

      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="ingredients-section">
        <h2>Key Ingredients to Unlock Boostron’s Power</h2>
        <p className="ingredients-intro">
          Boostron is your key to peak male performance, powered by a premium blend of natural herbs, vitamins, and plant extracts. Each ingredient is carefully selected to ignite testosterone, supercharge blood flow, and amplify stamina—unlocking unstoppable energy and confidence. Press the Boostron key to transform your vitality today!
        </p>
        <ul className="ingredients-list">
          {[
            { name: "Niacin (Vitamin B3)", desc: "Niacin sparks powerful blood flow by widening blood vessels, delivering oxygen-rich blood for rock-hard, long-lasting erections. It also fuels energy metabolism and heart health, keeping you charged for peak performance." },
            { name: "Muira Puama", desc: "Dubbed ‘potency wood,’ Muira Puama ignites sexual desire and arousal. This Amazonian herb boosts nerve sensitivity, banishes fatigue, and enhances erectile strength—unlocking your full potential." },
            { name: "Asian Ginseng", desc: "This adaptogenic powerhouse triggers energy surges, elevates mood, and boosts sexual function. It fights fatigue, supports testosterone, and amplifies mental and physical performance for unstoppable vitality." },
            { name: "Epimedium (Horny Goat Weed)", desc: "Packed with icariin, Epimedium supercharges blood flow and erectile function. It boosts stamina, ignites libido, and balances hormones naturally—a proven key to peak male performance." },
            { name: "Ginkgo Biloba", desc: "Ginkgo powers circulation to the brain and reproductive organs, fueling arousal and razor-sharp focus. It combats stress and enhances performance, unlocking your mental and physical edge." },
            { name: "Tribulus Terrestris", desc: "This herbal dynamo sparks testosterone production, amplifying libido, muscle growth, and strength. Perfect for aging men, it reignites sexual satisfaction and raw power naturally." },
            { name: "Catuaba Bark", desc: "Renowned in Brazilian medicine, Catuaba Bark boosts libido, sharpens the mind, and fights fatigue. It supports a healthy nervous system and elevates mood for total performance." },
          ].map((ing, idx) => (
            <li key={idx} className="ingredient-item">
              <div className="ingredient-number">{idx + 1}</div>
              <div className="ingredient-content">
                <strong>{ing.name}</strong>
                <p>{ing.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Science & Guarantee Section */}
      <section className="science-section">
        {/* Certification Logos Row */}
        <div className="cert-logos">
          {[
            "/images/boostron-fda-certificate-786x148.webp"
          ].map((logo, idx) => (
            <Image key={idx} src={logo} alt="Certification Logo" width={500} height={148} />
          ))}
        </div>

        <h2 className="science-heading">Scientifically Formulated</h2>

        {/* Three Step Row */}
        <div className="science-steps">
          {[
            {
              title: "FDA Approved Facility",
              desc: "Processed under strict sterile standards with regularly disinfected equipment.",
            },
            {
              title: "100% All Natural",
              desc: "With ingredients sourced from local growers that let plants naturally reach their full maturity and use no chemical treatments.",
            },
            {
              title: "180-Day Money Back Guarantee",
              desc: "Our investment is covered by a 180-Day, 100% Money-Back GUARANTEE.",
            },
          ].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="science-step">
                <div className="step-number">{idx + 1}</div>
                <strong className="step-title">{step.title}</strong>
                <p className="step-desc">{step.desc}</p>
              </div>
              {idx < arr.length - 1 && <span className="step-arrow">→</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Money Back Guarantee Block */}
        <div className="guarantee-block">
          <div className="guarantee-content">
            <div className="gurantee-blog">
              <Image src="/images/boostron-moneyback-removebg-preview.png" alt="Money Back Badge" width={200} height={200} />
            </div>
            <div className="guarantee-text">
              <h3>Boostron 180-Day Money Back Guarantee</h3>
              <p>
                Boostron comes with a 100% money-back guarantee – 180 full days from your original purchase.
                If you're not totally and completely satisfied with our product or your results within the first 180 days, simply let us know by calling our toll-free number or dropping us an email, and we'll gladly give you a full refund within 48 hours of the product being returned.
                That's right – simply return the product, even your empty bottles, anytime within 180 days of your purchase, and you'll receive a full, no-questions-asked refund (minus shipping and handling fees).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" id="benefits">
        <div className="container">
          <h2>Benefits of Boostron</h2>
          <div className="benefits-content">
            <p className="benefits-intro">
              Boostron is a powerful male vitality formula designed to help men feel stronger, more energized, and more confident—naturally. With consistent daily use, its herbal blend works to improve physical, hormonal, and sexual health without the use of synthetic stimulants or harsh chemicals.
            </p>

            <ul className="benefits-list">
              <li>
                <div className="benefit-item">
                  <span className="checkmark"></span>
                  <div className="benefit-content">
                    <div className="benefit-title">Stronger, Longer-Lasting Erections</div>
                    <div className="benefit-desc">Boostron improves blood flow to the penile chambers by widening blood vessels, helping you achieve firmer and more sustainable erections.</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="benefit-item">
                  <span className="checkmark"></span>
                  <div className="benefit-content">
                    <div className="benefit-title">Enhanced Stamina and Physical Endurance</div>
                    <div className="benefit-desc">By increasing energy production and oxygen delivery, Boostron helps you fight fatigue and stay active longer.</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="benefit-item">
                  <span className="checkmark"></span>
                  <div className="benefit-content">
                    <div className="benefit-title">Increased Libido and Sexual Desire</div>
                    <div className="benefit-desc">Herbal aphrodisiacs like Epimedium and Muira Puama stimulate sexual appetite and arousal.</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="benefit-item">
                  <span className="checkmark"></span>
                  <div className="benefit-content">
                    <div className="benefit-title">Natural Testosterone Boost</div>
                    <div className="benefit-desc">Supports healthy testosterone production using natural extracts like Tribulus and Tongkat Ali.</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="benefit-item">
                  <span className="checkmark"></span>
                  <div className="benefit-content">
                    <div className="benefit-title">Better Muscle Strength and Recovery</div>
                    <div className="benefit-desc">Contributes to lean muscle development and faster recovery from physical exertion.</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="benefit-item">
                  <span className="checkmark"></span>
                  <div className="benefit-content">
                    <div className="benefit-title">Sharper Focus and Reduced Stress</div>
                    <div className="benefit-desc">Adaptogenic ingredients help balance stress hormones and enhance mental clarity.</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="benefit-item">
                  <span className="checkmark"></span>
                  <div className="benefit-content">
                    <div className="benefit-title">Improved Blood Circulation</div>
                    <div className="benefit-desc">Promotes better cardiovascular function for energy and endurance.</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="benefit-item">
                  <span className="checkmark"></span>
                  <div className="benefit-content">
                    <div className="benefit-title">Safe, Natural, and Non-Habit Forming</div>
                    <div className="benefit-desc">Boostron is made in the USA in FDA-registered, GMP-certified facilities. It contains no synthetic hormones, no harmful chemicals, and no dependency-causing stimulants—just pure, plant-based support for total male wellness.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="faq-heading">Boostron – Frequently Asked Questions</h2>
        {(() => {
          const faqs = [
            {
              q: "Is Boostron safe to use?",
              a: "Absolutely. Boostron is formulated from 100% natural ingredients and manufactured in an FDA-registered, GMP-certified facility for maximum safety and purity.",
            },
            {
              q: "How many bottles should I order?",
              a: "We recommend taking Boostron consistently for at least 3-6 months for best results. Most customers choose the 3- or 6-bottle packages to ensure they don’t miss a day and to take advantage of the bigger discounts.",
            },
            {
              q: "What if Boostron doesn’t work for me?",
              a: "Every bottle is backed by our 180-Day Money Back Guarantee. If you’re not satisfied for any reason, simply return your bottles for a prompt, hassle-free refund.",
            },
            {
              q: "Are there any side effects?",
              a: "Boostron is all-natural and stimulant-free. No major side effects have been reported. If you have an existing medical condition, please consult your physician before use.",
            },
            {
              q: "Is my payment and personal data secure?",
              a: "Yes. Your order is processed through a 256-bit encrypted payment gateway, ensuring your personal and financial information remain completely confidential.",
            },
            {
              q: "How do I take Boostron for best results?",
              a: "Simply take 2 capsules daily with a glass of water, preferably with a meal for optimal absorption.",
            },
          ];

          const [openIdx, setOpenIdx] = React.useState<number | null>(null);

          return (
            <ul className="faq-questions">
              {faqs.map((item, idx) => (
                <li key={idx} className={openIdx === idx ? "open" : ""} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                  <span className="faq-q">{item.q}</span>
                  {openIdx === idx && <p className="faq-a">{item.a}</p>}
                </li>
              ))}
            </ul>
          );
        })()}

        {/* Top CTA Banner */}
        <div className="faq-banners">
          <div className="banner-image">
            <Image src="/images/boostron-removebg-preview.png" alt="Boostron Bottle" width={350} height={350} />
          </div>
          <div className="banner-content">
            <h3>Don’t Wait Any Longer! Order Your Discounted Bottle Now!</h3>
            <a href="#order" className="order-button max-button-padding">Only For $39.99/Bottle</a>
            {/* <p className="regular-price">Regular price :<span>$99</span></p> */}
          </div>
        </div>

        {/* Detailed Answer */}
        <div className="faq-answer-block">
          <h3>How Safe Is My Credit Card Information on Your Website?</h3>
          <p>Your online privacy is one thing you can be sure we so much prioritize here and thus do not worry about losing any sensitive credentials while making your purchase of Boostron supplement from us. Besides, you can Buysgoods’s excellent reputation and vast experience in online transactions to help you in safeguarding your purchase.</p>

          <p className="answer-subheading">Remarks:</p>
          <p>Boostron 180 Day Money Back Guarantee</p>

          <p className="answer-subheading">Boostron Refund Policy:</p>
          <p>Boostron has a 180-day money back guarantee for all purchases.</p>

          <p>If you didn’t experience any benefits with Boostron, or if you’re unhappy with the supplement for any reason, then you are entitled to a complete refund within 180 days of your original purchase.</p>

          <p>You can contact the makers of Boostron and the Boostron customer service team by email or online phone:</p>
          <p>Email: contact@Fortivir-Max.com</p>
        </div>

        {/* Bottom CTA Banner */}
        <div className="faq-banner bottom-banner">
          <h3>Don’t Wait Any Longer! Order Your Discounted Bottle Now!</h3>
          <Image src="/images/boostron-big-offer-removebg-preview.png" alt="Boostron Bottles" width={500} height={350} />
          <p className="regular-price small">Regular Price: $99/per bottle</p>
          <strong className="discounted">Only for: $39.99/per bottle</strong>
          <a href="#order" className="order-button max-button-padding">Order Your Boostron Now</a>
        </div>
      </section>

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
            <Link href="/privacy-policy">Disclaimer</Link> |
            <Link href="/privacy-policy">Terms of Use</Link> |
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>

          <div className="footer-copy">
            &copy; Copyright 2025. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
