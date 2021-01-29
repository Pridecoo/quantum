<template>
  <TheHeader />

  <main>
    <section class="banner">
      <div class="container">
        <div class="banner__inner">
          <div class="banner__content">
            <div class="headline">
              Trade everywhere. Invest here!
            </div>

            <p class="banner__text">
              We provide only the best trading software. The trading terminal
              MetaTrader4 is the most popular and convenient platform for access to
              global exchanges. You can work anywhere.
            </p>

            <base-button>Start trading</base-button>
          </div>
        </div>
      </div>
    </section>

    <section class="get-started">
      <div class="container">
        <div class="get-started__inner">
          <div class="headline">Getting Started Is <span>Fast & Easy</span></div>

          <ol class="get-started__steps">
            <base-step
              v-for="step in startingSteps"
              :headline="step.headline"
              :content="step.content"
              :key="step.headline"
              :mode="step.side"
            />
          </ol>
        </div>
      </div>
    </section>

    <section class="reviews">
      <div class="container">
        <div class="reviews__inner">
          <div class="headline">People love Big <span>Invest</span></div>

          <swiper
            :space-between="50"
            :pagination="{ clickable: false, type: 'fraction' }"
            navigation
            :loop="true"
          >
            <swiper-slide v-for="user in users" :key="user.name">
              <div class="reviews__item">
                <div class="reviews__top">
                  <img class="reviews__photo" :src="user.photo" alt="User Photo" />
                  <div class="reviews__user-info">
                    <div class="reviews__user-name">{{ user.name }}</div>
                    <div class="reviews__user-title">{{ user.title }}</div>
                  </div>
                </div>

                <p class="reviews__content">{{ user.comment }}</p>
              </div>
            </swiper-slide>

            <pagination></pagination>
            <navigation></navigation>
          </swiper>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <div class="faq__inner">
          <div class="headline">Frequently asked <span>questions</span></div>

          <FaqList />
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <div class="contact__inner">
          <div class="contact__text">
            <div class="headline">
              Contact us!
            </div>

            <div class="contact__content">
              <div class="contact__content-main">
                The support staff and customer service are available to help you with
                any questions or needs you might have. Just drop us a line.
              </div>
              <div class="contact__content-credits">
                This site is owned and operated by Kode Tech Solutions LTD
              </div>

              <address class="contact__info">
                <ul>
                  <li>
                    <div>Phone:</div>
                    <a href="tel:442038857261">442038857261</a>
                  </li>
                  <li>
                    <div>Email:</div>
                    <a href="mailto:help@google.com">help@google.com</a>
                  </li>
                  <li>
                    <div>Address:</div>
                    <a target="_blank" href="https://goo.gl/maps/VUFDPyovFnBYNEh47"
                      >Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro,
                      Republic of the Marshall Islands, MH 96960</a
                    >
                  </li>
                </ul>
              </address>
            </div>
          </div>

          <div class="contact__form">
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea rows="5" placeholder="Message"></textarea>

              <base-button>Send</base-button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <the-footer/>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import TheHeader from './components/layout/TheHeader';
import TheFooter from './components/layout/TheFooter';
import FaqList from './components/FaqList';

import userPic from '@/assets/images/user-photo.png';

SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
    TheHeader,
    TheFooter,
    Swiper,
    SwiperSlide,
    Pagination,
    Navigation,
    FaqList,
  },
  data() {
    return {
      users: [
        {
          photo: userPic,
          name: 'Albert Abello',
          title: 'Director of Growth',
          comment:
            'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x inour most mature market.',
        },
        {
          photo: userPic,
          name: 'Abell Alberto',
          title: 'CEO',
          comment:
            'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x inour most mature market.',
        },
        {
          photo: userPic,
          name: 'James Corden',
          title: 'Director of Something',
          comment:
            'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x inour most mature market.',
        },
        {
          photo: userPic,
          name: 'Leonid Chernovetskiy',
          title: 'Mayor',
          comment:
            'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x inour most mature market.',
        },
      ],
      startingSteps: [
        {
          headline: 'Register',
          content:
            'Complete the simple registration to get your trading credentials.',
        },
        {
          headline: 'Verification',
          content:
            'Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.',
          side: 'right',
        },
        {
          headline: 'Deposit funds',
          content:
            'Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.',
        },
        {
          headline: 'Start Trading',
          content:
            'Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.',
          side: 'right',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
/* @font-face {
  font-family: "Museo Sans";
  src: url("../src/assets/fonts/MuseoSansCyrl_2.woff") format("woff"),
       url("../src/assets/fonts/MuseoSansCyrl_2.otf") format("otf");
  font-display: swap;
  font-weight: 700;
} */

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('../src/assets/fonts/MuseoSansCyrl_2.woff') format('woff'),
    url('../src/assets/fonts/MuseoSansCyrl_2.otf') format('otf');
  font-display: swap;
  font-weight: 700;
}

@font-face {
  font-family: 'Montserrat';
  src: url('../src/assets/fonts/Montserrat-Regular.woff') format('woff'),
    url('../src/assets/fonts/Montserrat-Regular.ttf') format('ttf');
  font-display: swap;
  font-weight: 400;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  font-family: 'Museo Sans Cyrl';
  text-decoration: none;
}

p {
  margin: 0;
}

img {
  display: block;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 30px;
  color: #4f4f4f;
  background-color: grey;
}

/* section {
  max-width: 1280px;
} */

section {
  // padding: 140px 0 140px 120px;
  background-color: #fff;

  // &.banner {
  //   // padding: 0 120px;
  // }
}

ol {
  margin: 0;
  padding: 0;
}

#app {
  max-width: 1440px;
  margin: 0 auto;
}

.container {
  // max-width: 1280px;
  margin: 0 auto;
  padding: 0 120px;
}

.headline {
  max-width: 500px;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;
  color: #333333;

  span {
    background: rgba(98, 72, 255, 0.1);
  }
}

// Banner
.banner {
  position: relative;
  background: rgba(98, 72, 255, 0.1);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .headline {
    max-width: initial;
    font-size: 64px;
    line-height: 72px;
  }

  &__inner {
    background-image: url(~@/assets/images/banner.png);
    background-size: 482px auto;
    background-repeat: no-repeat;
    background-position: center right 0;
    padding: 139px 0 183px;
  }

  &__content {
    max-width: 585px;
  }

  &__text {
    max-width: 483px;
    min-height: 120px;
    margin-top: 32px;
  }

  button,
  a {
    margin-top: 48px;
  }
}

// Get Started
.get-started {
  &__inner {
    max-width: 1098px;
    padding: 140px 0;
  }

  &__steps {
    margin-top: 60px;
    list-style-type: decimal-leading-zero;
    list-style-position: inside;
  }
}

// Reviews
.reviews {
  &__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    min-height: 282px;
  }

  .headline {
    margin-right: 84px;

    span {
      display: inline-block;
      min-width: 355px;
    }
  }

  &__item {
    padding-left: 48px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 700;
    color: #333;
  }

  &__top {
    display: flex;
    align-items: center;
  }

  &__photo {
    margin-right: 30px;
  }

  &__user-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #4f4f4f;
  }

  &__content {
    position: relative;
    margin-top: 17px;
    font-size: 24px;

    &::before {
      position: absolute;
      top: 4px;
      left: -48px;
      content: '';
      width: 33px;
      height: 27px;
      background-image: url(~@/assets/images/quote.svg);
      background-size: cover;
    }
  }

  // Swiper
  .swiper-container {
    position: initial;
    max-width: 633px;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 0;
    right: -77px;
    width: initial;
    font-family: 'Museo Sans Cyrl';
    font-size: 15px;
    color: #4f62f6;
  }

  .swiper-pagination-current {
    color: #6248ff;

    &::before {
      content: '0';
    }
  }

  .swiper-pagination-total {
    &::before {
      content: '0';
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 189px;
    left: 0;
    z-index: 30;
    width: 47px;
    height: 47px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    transition: border-color 0.3s ease-in-out;

    &:active {
      border-color: #6248ff;
    }

    &::after {
      position: absolute;
      left: 40%;
      font-weight: 700;
      font-size: 13px;
      color: #000;
      text-align: center;
    }
  }

  .swiper-button-next {
    left: 56px;

    &::after {
      left: initial;
      right: 40%;
    }
  }
}

// faq
.faq {
  &__inner {
    padding: 140px 0;
  }

  .headline {
    span {
      min-width: 263px;
    }
  }
}

.contact {
  background-color: #f2f0ff;

  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 120px 0;
  }

  &__text {
    max-width: 483px;
  }

  &__content-main {
    margin-top: 32px;
  }

  &__content-credits {
    margin-top: 48px;
    font-size: 16px;
    line-height: 27px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    div {
      margin: 24px 0 0;
      font-family: 'Museo Sans Cyrl';
      font-size: 15px;
      line-height: 16px;
    }

    a {
      margin-top: 8px;
      font-family: Montserrat;
      font-size: 16px;
      line-height: 27px;
      color: #4f4f4f;
    }
  }

  &__form {
    max-width: 585px;
    padding: 80px;
    text-align: center;
    background: #fff;
    border: 2px solid #6248ff;
    border-radius: 20px;

    input,
    textarea {
      width: 100%;
      padding: 7px 16px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: #828282;
      outline: transparent;
      border: 1px solid #e0e0e0;
      border-radius: 3px;

      &:focus {
        outline: 2px solid #6248ff;
      }
    }

    input + input,
    textarea {
      margin-top: 24px;
    }

    button {
      margin-top: 40px;
    }
  }
}
</style>
