<template>
  <layout>
    <section class="blog_area single-post-area section-margin">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 posts-list mx-auto">
            <div class="single-post">
              <div class="feature-img">
                <!--                 <img class="img-fluid" src="img/blog/main-blog/m-blog-1.jpg" alt />
                -->
              </div>

              <div class="blog_details">
                <h2>{{$page.post.title}}</h2>
                <div class="excert" v-html="$page.post.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<page-query>

query Post ($path: String!){
	post: post (path: $path) {
		title
		content
	}
}

</page-query>

<script>
export default {};
</script>

<style>
</style>