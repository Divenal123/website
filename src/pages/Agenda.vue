<template>
  <Layout>
    <section class="section-margin">
      <div class="container">
        <div class="section-intro text-center pb-98px">
          <p class="section-intro__title">Agenda des activités</p>
          <h2 class="primary-text">Ne ratez aucune activité</h2>
          <g-image src="~/assets/img/home/section-style.png" alt />
        </div>

        <div class="d-lg-flex justify-content-center">
          <div class="card-feature mb-5 mb-lg-0">
            <div class="feature-icon">
              <i class="flaticon-prize"></i>
            </div>
            <h3>Grâce à votre agenda électronique</h3>
            <p
              class="text-justify"
            >Ajouter les Journées Informatiques dans votre agenda pour être informé de toutes les activités prévues pour les journées Informatiques 13.</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <a
              class="button mr-3 mb-2"
              href="https://calendar.google.com/calendar/ical/journeesinformatiques%40gmail.com/public/basic.ics"
            >Télécharger</a>

            <a
              class="button mb-2"
              href="https://calendar.google.com/calendar?cid=am91cm5lZXNpbmZvcm1hdGlxdWVzQGdtYWlsLmNvbQ"
            >Ouvrir avec google calendar</a>
          </div>
        </div>

        <div class="d-lg-flex justify-content-center mt-4">
          <iframe
            class="d-none d-sm-block"
            src="https://calendar.google.com/calendar/embed?src=journeesinformatiques%40gmail.com&ctz=Africa%2FLagos"
            style="border: 0"
            width="1000"
            height="800"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Agenda | Journées Informatiques"
  }
};
</script>
