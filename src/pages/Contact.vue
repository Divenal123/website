<template>
  <Layout>
    <div class="section-margin--large">
      <div class="container">
        <div class="section-intro section-intro-contact text-center pb-98px">
          <p class="section-intro__title">Ecrivez-nous</p>
          <h2 class="primary-text">Contact</h2>
          <g-image src="~/assets/img/home/section-style.png" alt />
        </div>

        <div class="row">
          <div class="col-12">
            <h2 class="contact-title">Toutes vos préoccupations</h2>
          </div>
          <div class="col-lg-8">
            <form
              class="form-contact contact_form"
              id="contactForm"
              action="https://getform.io/f/4e174150-f929-40b5-91ab-25a462f44d1b"
              method="POST"
            >
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      class="form-control w-100"
                      name="message"
                      id="message"
                      cols="30"
                      rows="9"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Votre adresse mail"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Votre sujet"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mt-3">
                <button type="submit" class="button button-contactForm">Envoyer</button>
              </div>
            </form>
          </div>

          <div class="col-lg-4">
            <div class="media contact-info">
              <span class="contact-info__icon">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <div class="media-body">
                <h3>Université de Kinshasa.</h3>
                <p>Local B27, Faculté des sciences</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon">
                <i class="fas fa-phone"></i>
              </span>
              <div class="media-body">
                <h3>
                  <a href="tel:+243810312251">+ (243) 810312251</a>
                </h3>
                <p>Lundi au Vendredi 9h à 18h</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon">
                <i class="fab fa-whatsapp"></i>
              </span>
              <div class="media-body">
                <h3>
                  <a href="https://wa.me/243810312251">+ (243) 810312251</a>
                </h3>
                <p>Lundi au Samedi 9h à 18h</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon">
                <i class="fas fa-envelope-open-text"></i>
              </span>
              <div class="media-body">
                <h3>
                  <a
                    href="mailto:contact@journeesinformatiques.com"
                  >contact@journeesinformatiques.com</a>
                </h3>
                <p>Ecrivez vos demandes à tout momment!</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-lg-3 mb-4 mb-md-0"></div>
          <div class="col-md-8 col-lg-9"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
// import emailjs from "emailjs-com";

export default {
  metaInfo: {
    title: "Contactez-nous | Journées Informatiques"
  }
};
</script>
