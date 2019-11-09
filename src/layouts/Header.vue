<template>
  <div>
    <slot />

    <footer class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Les Journées Informatiques</h6>
              <p>
                organisation de l'Université de Kinshasa, Facultés des sciences et département de mathématiques et
                informatiques.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Navigation</h6>
              <div class="row">
                <div class="col">
                  <ul>
                    <li>
                      <g-link to="/">Accueil</g-link>
                    </li>
                    <li>
                      <g-link to="/agenda/">Agenda</g-link>
                    </li>
                    <li>
                      <g-link to="/challenge/">Challenges</g-link>
                    </li>
                    <li>
                      <g-link to="/blog/">Blog</g-link>
                    </li>
                  </ul>
                </div>
                <div class="col">
                  <ul>
                    <li>
                      <g-link to="/contact/">Contact</g-link>
                    </li>
                    <li>
                      <g-link to="/archive/">Archives</g-link>
                    </li>
                    <li>
                      <g-link to="/contact/">Rejoignez-nous</g-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Abonnez-vous par email</h6>
              <p>Recevez des nouvelles rapidement et gratuitement dans votre boîte mail.</p>
              <div id="mc_embed_signup">
                <form
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  action="https://gmail.us20.list-manage.com/subscribe/post?u=b4cbd3d04b3346730f6b96449&amp;id=1d139fed81"
                  method="post"
                  class="subscription relative"
                  novalidate
                >
                  <div class="input-group d-flex flex-row">
                    <input
                      name="EMAIL"
                      id="mce-EMAIL"
                      placeholder="Adresse mail"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Adresse mail '"
                      required
                      type="email"
                    />
                    <button type="submit" class="btn bb-btn">
                      <span class="lnr lnr-location"></span>
                    </button>
                  </div>
                  <div class="mt-10 info"></div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget mail-chimp">
              <h6 class="mb-20">Rejoignez-nous sur les réseaux sociaux</h6>
              <ul class="d-flex">
                <li class="m-2">
                  <a href="https://facebook.com/jinfo.drc/" class="social-size">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="m-2">
                  <a href="https://twitter.com/jinfodrc" target="_blank" class="social-size">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="m-2">
                  <a
                    href="https://www.linkedin.com/company/jirdc"
                    target="_blank"
                    class="social-size"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li class="m-2">
                  <a href="mailt:contact@journeesinformatiques.com" class="social-size">
                    <i class="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <p class="col-lg-12 col-sm-12 footer-text m-0 text-center">
              Code with
              <i class="fa fa-heart" aria-hidden="true"></i> by
              <a href target="_blank">JI13 Team</a>

              <!-- Tweaked by igorvisi (https://igorvisi.com). -->
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  mounted() {
    window.$ = require("jquery");
    var nav_offset_top = $("header").height() + 50;

    //* Navbar Fixed
    function navbarFixed() {
      if ($(".header_area").length) {
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= nav_offset_top) {
            $(".header_area").addClass("navbar_fixed");
          } else {
            $(".header_area").removeClass("navbar_fixed");
          }
        });
      }
    }
    navbarFixed();
  }
};
</script>