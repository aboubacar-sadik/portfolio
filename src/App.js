import Header from "./sections/header/Header";
import About from "./sections/about/About";
import SectionTitle from "./sections/common/SectionTitle";
import AboutData from './sections/about/AboutData'
import ServicesData from "./sections/services/ServicesData";
import Button from "./sections/common/Button";
import { nanoid } from "nanoid";
import { Services, ServicesSlogans } from "./sections/services/Services";
import { SkillGroup } from "./sections/skills/Skills";
import Pricing from "./sections/tarif/Pricing";
import { tarifData } from "./sections/tarif/tarifData";
import contactData from "./sections/contact/contactData";
import Input from "./sections/contact/Input";
import Social from "./sections/contact/Social";

export default function App() {
  const copyrightCurrentYear = new Date().getFullYear()

  const aboutCards = AboutData.map((text, index) => {
    return <About htmlClass={`about-card card-${index + 1}`} aboutContent={text} key={nanoid()} />
  })

  const servicesCards = ServicesData.services.map((service, index) => {
    return (
      <Services img={service.img} title={service.title} description={service.description} key={nanoid()} />
    )
  })

  const servicesSlogans = ServicesData.services_slogan.map((slogan, index) => {
    return <ServicesSlogans slogan={slogan} key={nanoid()} />
  })

  // TARIF
  const pricingSection = tarifData.pricing.map((price, index) => {
    return <Pricing priceTitle={price.title} price={price.price} priceUnit={price.unit} key={index} />
  })
  // FORM
  const form = contactData.inputs.map((input, index) => {
    return <Input type={input.type} placeholder={input.placeholder} key={index} />
  })
  const socialsContact = contactData.socials.map((social, index) => {
    return <Social img={social.img} name={social.name} socialLink={social.link} key={index} />
  })

  return (
    <>
      <header>
        <div className="container">
          <Header />
        </div>
      </header>

      <main>
        <section id="about">
          <SectionTitle number='01.' title="Qui suis-je ?" />
          <div className="about-me">
            {aboutCards}
            <Button buttonText='Télecharger mon CV' class="btn about-btn" />
          </div>
        </section>

        <section id="services">
          <SectionTitle number="02." title="Faisons évoluer le web, ensemble !" />
          <p className="services-detail">{ServicesData.detail}</p>
          <div className="services-cards">
            {servicesCards}
          </div>
          <div className="services-slogans">{servicesSlogans}</div>
          <p className="services-message">{ServicesData.send_message}</p>
        </section>

        <section id="skills">
          <SectionTitle number="03." title="Compétences" />
          <br></br>
          <SkillGroup />
        </section>

        <section id="pricing">
          <SectionTitle number="04." title="Tarification" />
          <div className="pricing-wrapper">
            <p className="pricing-detail">{tarifData.tarif_detail}</p>
            <div className="pricing-group">
              {pricingSection}
            </div>
            <p>{tarifData.tarif_msg}</p>
          </div>
        </section>

        <section id="contact">
          <SectionTitle number="05." title="Dites Bonjour !" />
          <div className="contact-wrapper"></div>
          <p className="contact-detail">{contactData.form_detail}</p>
          <div className="form-social">
            <form id="form">
              {form}
              <textarea placeholder="Message..."></textarea>
              <Button buttonText='Envoyer' class="btn form-btn" />
            </form>
            <div className="socials-group">
              {socialsContact}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="copyright-wrapper">
          <p className="copyright">© {copyrightCurrentYear}. Conçu et développé avec <span>♥</span> par <span>Aboubacar Sadik</span>.</p>
        </div>
      </footer>
    </>
  )
}
