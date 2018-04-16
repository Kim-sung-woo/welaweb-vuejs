<template>
  <div class="post">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">WeLA English</h1>
        <p>숙제 게시판</p>
      </div>
    </div>

    <div v-if="posts.length > 0"
         class="content">
      <div v-if="posts.length === 0" class="post-preview">
        No posts are here... yet.
      </div>
      <div class="article-preview"
           v-for="(post, index) in posts">

        <div class="article-meta">
          <div class="info">
            {{ post.owner.name }}
            <span class="date">{{ post.createdAt | date }}</span>
          </div>
        </div>

        <div class="post-content">
          <span>{{post.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        posts: [],
        error: null
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.error = this.posts.length > 0;
        this.loading = true;

        var url = 'https://api.welaenglish.co.kr/post/find?query=%7B%22category%22:%22homework%22,%22campus%22:41%7D&populate=%5B%22owner%22,%7B%22path%22:%22replies%22,%22match%22:%7B%22isDeleted%22:false%7D,%22populate%22:%5B%7B%22path%22:%22owner%22%7D,%7B%22path%22:%22comments%22,%22match%22:%7B%22isDeleted%22:false%7D%7D%5D%7D,%7B%22path%22:%22comments%22,%22match%22:%7B%22isDeleted%22:false%7D,%22populate%22:%7B%22path%22:%22owner%22%7D%7D%5D&limit=10&skip=0&sort=%7B%22_id%22:-1%7D'
        this.$http.get(url)
          .then((response) => {
            console.log(response)
            if (response) {
              this.loading = false
              this.posts = response.data.posts
            }
          }, (response) => {
            this.error = response
          })
      }
    }
  }
</script>

<style lang="scss">
  .post {
    .banner {
      background-color: yellowgreen;
      margin-bottom: 0px;
    }

    .article-meta {
      padding: 0 3%;
    }

    div.post-content {
      padding: 0 3%;
      margin: 0 1.5rem 0 0.3rem;
      font-size: 1em;
    }
  }
</style>
