<template>
  <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :initialSlide= 1
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :slideToClickedSlide="true"
      :speed="1000"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :pagination="true"
      class="swiper"
  >
    <swiper-slide
        v-for="(project, index) in projects"
        :key="`project-number-${index}`"
    >
      <img
          :srcset="
            `${project.images.sm.src} 250w,
             ${project.images.md.src} 300w,
             ${project.images.lg.src} 400w`"
          sizes="
            (min-width: 992px) 400px,
            (min-width: 768px) 300px,
            250px"
          :src="project.images.sm.src"
          :alt="project.alt">
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import { EffectCoverflow, A11y, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import p01_sm from "@assets/projects/1914-in-a-timeline-sm.webp";
import p01_md from "@assets/projects/1914-in-a-timeline-md.webp";
import p01_lg from "@assets/projects/1914-in-a-timeline-lg.webp";
import p02_sm from "@assets/projects/storytellr-sm.webp";
import p02_md from "@assets/projects/storytellr-md.webp";
import p02_lg from "@assets/projects/storytellr-lg.webp";
import p03_sm from "@assets/projects/ziegler-gartenpflege-sm.webp";
import p03_md from "@assets/projects/ziegler-gartenpflege-md.webp";
import p03_lg from "@assets/projects/ziegler-gartenpflege-lg.webp";
import p04_sm from "@assets/projects/coronavirus-community-map-sm.webp";
import p04_md from "@assets/projects/coronavirus-community-map-md.webp";
import p04_lg from "@assets/projects/coronavirus-community-map-lg.webp";
import p05_sm from "@assets/projects/mattsphoto-sm.webp";
import p05_md from "@assets/projects/mattsphoto-md.webp";
import p05_lg from "@assets/projects/mattsphoto-lg.webp";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Autoplay, A11y, Pagination],
      projects: [
        {
          title: 'GLAM-Hackathon',
          images: {
            sm: p01_sm,
            md: p01_md,
            lg: p01_lg
          },
          alt: '1914 in a timeline - GLAM-Hackathon'
        },
        {
          title: 'Storytellr',
          images: {
            sm: p02_sm,
            md: p02_md,
            lg: p02_lg
          },
          alt: 'Storytellr - JavaScript-Bibliothek für Storytelling im Web'
        },
        {
          title: 'Ziegler Gartenpflege',
          images: {
            sm: p03_sm,
            md: p03_md,
            lg: p03_lg
          },
          alt: 'Ziegler Gartenpflege - Neue Webseite'
        },
        {
          title: 'Coronavirus Community Map',
          images: {
            sm: p04_sm,
            md: p04_md,
            lg: p04_lg
          },
          alt: 'Coronavirus Community Map - Isoliert aber nicht alleine'
        },
        {
          title: 'Mattsphoto',
          images: {
            sm: p05_sm,
            md: p05_md,
            lg: p05_lg
          },
          alt: 'Mattsphoto.ch - Naturfotografie Graubünden'
        }
      ]
    };
  }
}
</script>

<style>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  max-width: 250px;
  height: 250px;
  @media (min-width: 768px) {
    max-width: 300px;
  }
  @media (min-width: 992px) {
    max-width: 400px;
  }
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
}
.swiper-wrapper {
  padding-bottom: 2rem;
}
.swiper-pagination {
  .swiper-pagination-bullet-active {
    background-color: #d40000;
  }
}
</style>
