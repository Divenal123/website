<template>
  <Layout>
    <!--================Hero Banner Area Start =================-->
    <section class="hero-banner">
      <particlesJS />
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6" style="z-index: 10;">
            <span class="hero-banner-icon">
              <i class="flaticon-sing"></i>
            </span>
            <p>21 - 22 / 02 / 2020</p>
            <h2>Les Journées Informatiques Edition 13</h2>
            <p>
              Les rendez-vous des
              <span id="typed1"></span>
            </p>
            <g-link class="button button-header" to="/contact">Rejoignez-nous</g-link>
          </div>
          <div class="col-12 col-sm-4">
            <g-image class="img-fluid" src="~/assets/img/banner/vr.png"></g-image>
          </div>
        </div>
      </div>
    </section>
    <!--================Hero Banner Area End =================-->

    <!--================ Innovation section Start =================-->
    <section class="section-padding--small bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center mb-5 mb-lg-0">
            <div class="innovative-wrapper">
              <h3 class="primary-text">
                Thème : « Les innovations technologiques: Tremplins pour un
                développement
                socio-économique en RDC »
              </h3>
              <p class="h4 primary-text2 mb-3">C'est quoi « les Journées Informatiques » ?</p>
              <p class="text-justify">
                Les journées informatiques(JI) est une organisation de l'Université de Kinshasa réunissant des étudiants
                autour des
                activités à caractère académique et social sur le numérique.
              </p>
              <br />
              <p class="text-justify">
                Les Journées Informatiques offrent aussi des
                opportunités de réseautage, de visibilité et surtout de lever des fonds pour financer des projets sur le
                numérique.
              </p>
              <br />
              <p class="text-justify">
                Elle est organisée par le département des
                mathématiques et informatique de
                la Faculté des
                sciences, à l'Université de Kinshasa chaque année. Cette année se tiendra sa 13ième édition (13 ans déjà
                ).
              </p>
            </div>
          </div>
          <div class="col-lg-6 pl-xl-5">
            <ul class="clockdiv text-center" id="clockdiv">
              <li class="clockdiv-single clockdiv-day">
                <h1 class="days-">257</h1>
                <span class="smalltext">Jours</span>
              </li>
              <li class="clockdiv-single clockdiv-hour">
                <h1 class="hours-">5</h1>
                <span class="smalltext">Heures</span>
              </li>
              <li class="clockdiv-single clockdiv-minute">
                <h1 class="minutes-">45</h1>
                <span class="smalltext">Mins</span>
              </li>
            </ul>

            <div class="clockdiv-content text-center">
              <p class="h4 primary-text2 mb-2">21, 22 - février, 2020 à Kinshasa</p>
              <g-link class="button button-link" to="/agenda/">Voir l'agenda</g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================ Innovation section End =================-->

    <!--================ Join section Start =================-->
    <section class="section-margin">
      <div class="container">
        <div class="section-intro text-center pb-98px">
          <p class="section-intro__title">Rejoignez-nous</p>
          <h2 class="primary-text">Qu'est-ce qui y est prévu ?</h2>
          <g-image src="~/assets/img/home/section-style.png" alt />
        </div>

        <div class="d-lg-flex justify-content-between">
          <div class="card-feature mb-5 mb-lg-0">
            <div class="feature-icon">
              <i class="flaticon-prize"></i>
            </div>
            <h3>App challenge</h3>
            <p class="text-justify">
              Une compétition qui vise à développer et présenter des solutions numériques par les étudiants pour
              améliorer la vie
              quotidienne en RDC. Chaque solution sera soumise aux votes des jury et du public.
            </p>
          </div>

          <div class="card-feature mb-5 mb-lg-0">
            <div class="feature-icon">
              <i class="flaticon-sing"></i>
            </div>
            <h3>Séminaires & conférences</h3>
            <p class="text-justify">
              Ainsi que des cours et formations sur de différents sujets tels que la programmation, réseaux ainsi que
              différents logiciels utilisés dans le numérique .
            </p>
          </div>

          <div class="card-feature mb-5 mb-lg-0">
            <div class="feature-icon">
              <i class="flaticon-earth-globe"></i>
            </div>
            <h3>Hackathons</h3>
            <p class="text-justify">
              Marathons en groupe pour trouver des solutions à des problèmes donnés grâce à des applications conçues à
              un
              intervale de temps réduit.
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <g-link class="button mb-2" to="/agenda">Voir l'agenda</g-link>
          </div>
        </div>
      </div>
    </section>
    <!--================ Join section End =================-->

    <!--================ Speaker section Start =================-->
    <section class="speaker-bg section-padding">
      <div class="container">
        <div class="section-intro section-intro-white text-center pb-98px">
          <p class="section-intro__title">Rejoignez-nous</p>
          <h2 class="primary-text">Différents intervenants</h2>
          <g-image src="~/assets/img/home/section-style.png" alt />
        </div>

        <div class="row">
          <!--         <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="~/assets/img/home/speaker-1.png" alt="">
            <div class="speaker-footer">
              <h4>Jhon Leonar</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="~/assets/img/home/speaker-2.png" alt="">
            <div class="speaker-footer">
              <h4>Donald Markin</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="~/assets/img/home/speaker-3.png" alt="">
            <div class="speaker-footer">
              <h4>Donald Markin</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-100 mb-50px d-none d-lg-block"></div>

        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="~/assets/img/home/speaker-1.png" alt="">
            <div class="speaker-footer">
              <h4>Donald Markin</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="~/assets/img/home/speaker-2.png" alt="">
            <div class="speaker-footer">
              <h4>Donald Markin</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="~/assets/img/home/speaker-3.png" alt="">
            <div class="speaker-footer">
              <h4>Jhon Leonar</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
          </div>-->
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <g-link class="button text-white mb-2" to="/contact/">Je veux intervenir</g-link>
          </div>
        </div>
      </div>
    </section>
    <!--================ Speaker section End =================-->

    <!--================ Schedule section Start =================-->
    <section class="section-margin mb-5 pb-5">
      <div class="container">
        <div class="section-intro text-center pb-98px">
          <p class="section-intro__title">Rejoignez-nous</p>
          <h2 class="primary-text">Programmes</h2>
          <g-image src="~/assets/img/home/section-style.png" alt />
        </div>

        <div class="row">
          <div class="col-xl-10 offset-xl-1">
            <div class="scheduleTab">
              <ul class="nav nav-tabs">
                <li class="nav-item text-center">
                  <a class="active" data-toggle="tab" href="#day1">
                    <h4>Ouverture</h4>
                    <p>19 octobre, 2019</p>
                  </a>
                </li>
                <li class="nav-item text-center">
                  <a data-toggle="tab" href="#">
                    <h4>
                      <i class="fa fa-lock"></i>
                    </h4>
                    <p>Bientôt</p>
                  </a>
                </li>
                <li class="nav-item text-center">
                  <a data-toggle="tab" href>
                    <h4>
                      <i class="fa fa-lock"></i>
                    </h4>
                    <p>Bientôt</p>
                  </a>
                </li>
                <li class="nav-item text-center">
                  <a data-toggle="tab" href="#">
                    <h4>
                      <i class="fa fa-lock"></i>
                    </h4>
                    <p>Bientôt</p>
                  </a>
                </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div id="day1" class="tab-pane active">
                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant1.jpg" alt />
                          <h3>Dominique MIGISHA</h3>
                          <p>Conseiller spécial du chef de l'Etat en charge du numériques</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">10.35 - 11.00</p>
                          <g-link class="schedule-title" to>
                            <h3>« Plan National du numérique »</h3>
                          </g-link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant2.jpg" alt />
                          <h3>Pr. Dr. Pierre KASENGEDIA</h3>
                          <p>Professeur des universités et DG d'ISTA</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">11.03 - 11.28</p>
                          <g-link class="schedule-title">
                            <h3>« Aspect sécuritaire lié au système DNS et à l'informatique de nuage »</h3>
                          </g-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant3.jpg" alt />
                          <h3>Ivan Paul Emmanuel Tia</h3>
                          <p>Hub manager chez Ingénious City</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">11.31 - 11.56</p>
                          <g-link class="schedule-title" to>
                            <h3>« Incubateur: opportunités pour les jeunes entrepreneurs »</h3>
                          </g-link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant4.jpg" alt />
                          <h3>Emmanuel KAMALENGA</h3>
                          <p>Hub manager chez Ingénious City</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">11.56 - 12.21</p>
                          <g-link class="schedule-title" to>
                            <h3>« Chapitre PMI - RDC »</h3>
                          </g-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="day2" class="tab-pane">
                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant3.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <g-link class="schedule-title" to>
                            <h3>Previous Year achivement</h3>
                          </g-link>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant1.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant2.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="day3" class="tab-pane">
                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant3.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant1.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant2.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="day4" class="tab-pane">
                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant3.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant1.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant2.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="schedule-card">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                        <div class="card-identity">
                          <g-image src="~/assets/img/intervenant/intervenant3.jpg" alt />
                          <h3>Adam Jamsmith</h3>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="schedule-content">
                          <p class="schedule-date">9.00 AM - 10.30 AM</p>
                          <a class="schedule-title" href="#">
                            <h3>Previous Year achivement</h3>
                          </a>
                          <p>
                            And wherein Beginning of you cattle fly had was deep wherein darkness behold male called
                            evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in
                            wherein beginning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================ Schedule section End =================-->

    <!--================ Sponsor section Start =================-->
    <section class="section-padding--small sponsor-bg">
      <div class="container">
        <div class="section-intro text-center pb-80px">
          <p class="section-intro__title">Rejoignez-nous</p>
          <h2 class="primary-text">Nos sponsors</h2>
          <g-image src="~/assets/img/home/section-style.png" alt />
        </div>

        <div class="sponsor-wrapper mb-5 pb-4">
          <h3 class="sponsor-title mb-5">Gold Sponsor</h3>
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div class="sponsor-single">
                <!-- <img class="img-fluid" src="~/assets/img/home/sponsor1.png" alt=""> -->
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div class="sponsor-single">
                <!-- <img class="img-fluid" src="~/assets/img/home/sponsor2.png" alt=""> -->
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div class="sponsor-single">
                <!-- <img class="img-fluid" src="~/assets/img/home/sponsor3.png" alt=""> -->
              </div>
            </div>
          </div>
        </div>

        <div class="sponsor-wrapper sponsor-wrapper--small">
          <h3 class="sponsor-title mb-5">Silver Sponsor</h3>
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div class="sponsor-single">
                <!-- <img class="img-fluid" src="~/assets/img/home/sponsor-s.png" alt=""> -->
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div class="sponsor-single">
                <!-- <img class="img-fluid" src="~/assets/img/home/sponsor-sm-2.png" alt=""> -->
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div class="sponsor-single">
                <!-- <img class="img-fluid" src="~/assets/img/home/sponsor-sm-3.png" alt=""> -->
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 text-center">
              <g-link class="button mb-2 text-white" to="/contact/">Je veux sponsoriser</g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================ Sponsor section End =================-->

    <!--================ Gallery section Start =================-->
    <section class="section-padding gallery-area gallery-bg">
      <div class="container">
        <div class="section-intro section-intro-white text-center pb-98px">
          <p class="section-intro__title">Rejoignez-nous</p>
          <h2 class="primary-text">Photos</h2>
          <g-image src="~/assets/img/home/section-style.png" alt />
        </div>

        <div class="row no-gutters">
          <div class="col-sm-6 col-md-4">
            <div class="single-imgs relative">
              <g-image
                class="card-img rounded-0"
                src="~/assets/img/gallery/ji11/g1.png"
                quality="70"
                alt
              />
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-icon">
                    <i class="ti-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="single-imgs relative">
              <g-image
                class="card-img rounded-0"
                src="~/assets/img/gallery/ji11/g4.png"
                quality="70"
                alt
              />
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-icon">
                    <i class="ti-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="single-imgs relative">
              <g-image
                class="card-img rounded-0"
                src="~/assets/img/gallery/ji12/g3.png"
                quality="70"
                alt
              />
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-icon">
                    <i class="ti-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="single-imgs relative">
              <g-image
                class="card-img rounded-0"
                src="~/assets/img/gallery/ji12/g4.png"
                quality="70"
                alt
              />
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-icon">
                    <i class="ti-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="single-imgs relative">
              <g-image
                class="card-img rounded-0"
                src="~/assets/img/gallery/ji12/g5.png"
                quality="70"
                alt
              />
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-icon">
                    <i class="ti-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="single-imgs relative">
              <g-image
                class="card-img rounded-0"
                src="~/assets/img/gallery/ji12/g6.png"
                quality="70"
                alt
              />
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-icon">
                    <i class="ti-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <a
              class="button mb-2 text-white"
              target="_blank"
              href="https://drive.google.com/drive/folders/1AKQwJVx-ih_MAT5nXhi26YRTip0021u_?usp=sharing"
            >
              Je veux voir
              plus
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--================ Gallery section End =================-->

    <!--================ Blog section Start =================-->
    <section class="section-margin">
      <div class="container">
        <div class="section-intro text-center pb-98px">
          <p class="section-intro__title">Rejoignez-nous</p>
          <h2 class="primary-text">Récents articles</h2>
          <g-image src="~/assets/img/home/section-style.png" alt />
        </div>

        <!--         <div class="blogCarousel pb-xl-1">
          <div class="row">
            <div class="card-blog col-12 col-sm-4">
              <div class="blog-body">
                <g-image class="card-img" src="~/assets/img/blog/blog2.png" alt />
                <a href="#">
                  <h3>
                    Owls should be used to help abused children open
                    <br class="d-none d-xl-block" />up in therapy sessions, says charity boss
                  </h3>
                </a>
                <ul class="blog-info">
                  <li>
                    <a href="#">
                      <i class="ti-comments-smiley"></i> 03 Feb, 2019
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti-time"></i> No Comment
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card-blog col-12 col-sm-4">
              <div class="blog-body">
                <g-image class="card-img" src="~/assets/img/blog/blog2.png" alt />
                <a href="#">
                  <h3>
                    Owls should be used to help abused children open
                    <br class="d-none d-xl-block" />up in therapy sessions, says charity boss
                  </h3>
                </a>
                <ul class="blog-info">
                  <li>
                    <a href="#">
                      <i class="ti-comments-smiley"></i> 03 Feb, 2019
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti-time"></i> No Comment
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card-blog col-12 col-sm-4">
              <g-image class="card-img" src="~/assets/img/blog/blog2.png" alt />
              <div class="blog-body">
                <a href="#">
                  <h3>
                    Owls should be used to help abused children open
                    <br class="d-none d-xl-block" />up in therapy sessions, says charity boss
                  </h3>
                </a>
                <ul class="blog-info">
                  <li>
                    <a href="#">
                      <i class="ti-comments-smiley"></i> 03 Feb, 2019
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti-time"></i> No Comment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </section>
    <!--================ Blog section End =================-->
  </Layout>
</template>

<script>
import Typed from "typed.js";
import particlesJS from "~/components/ParticulesJS.vue";

export default {
  metaInfo: {
    title: "Les Journées Informatiques"
  },
  components: { particlesJS },
  mounted() {
    var typed1 = new Typed("#typed1", {
      strings: [
        "<strong>Passionnés du numérique.</strong>",
        "<strong>Étudiants.</strong>",
        "<strong>Professeurs.</strong>",
        "<strong>Entrepreneurs.</strong>",
        "<strong>Entreprises.</strong>"
      ],
      typeSpeed: 30,
      startDelay: 1200,
      backSpeed: 20,
      backDelay: 500,
      cursorChar: "|",
      shuffle: true,
      smartBackspace: false,
      loop: true
    });
  }
};
</script>

<style>
</style>
