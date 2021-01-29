<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <a class="logo" href="#">
          <img src="../../assets/images/logo.png" alt="logo" />
        </a>

        <div class="footer__info">
          <div class="footer__heading">Information and high risk warning:</div>
          <p class="footer__text">
            Trading with foreign exchange (FX), contract for differences (CFDs) and
            precious metals carries a high level of risk that may not be suitable for
            all investors. Leverage creates additional risk and loss exposure. Before
            you decide to trade foreign exchange or contract for differences,
            carefully consider your investment objectives, experience level, and risk
            tolerance.
          </p>
        </div>

        <div class="footer__info">
          <div class="footer__heading">Legal disclaimer:</div>
          <p class="footer__text">
            Forex trading entails significant risks and is not appropriate for all
            investors. The possibility of incurring substantial losses should be
            taken into account. It is therefore important to understand the possible
            consequences of investing. Traders should weigh their earning potential
            against the risks involved and act accordingly. Interactive Trade Ltd
            operating under brand and using domenLink domain within the European
            Economic Area.
          </p>
        </div>

        <nav class="footer__links">
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Instructions</a></li>
            <li><a href="#">Platforms</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Sign up for free</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer__bottom">
        <ul>
          <li><a href="#">Copyright 2020, All Right Reserved</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Risk Warnings</a></li>
          <li><a href="#">Anti-Money Laundering</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 32px 0;
  background-color: #fff;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__top {
    display: flex;
  }

  .logo {
    margin-right: 160px;
  }

  &__info {
    margin-right: 30px;
  }

  &__heading {
    font-family: 'Museo Sans Cyrl';
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #333333;
  }

  &__text {
    margin-top: 16px;
    max-width: 380px;
    font-size: 16px;
    line-height: 27px;
  }

  nav {
    margin-left: auto;

    ul {
      li + li {
        margin-top: 18px;
      }

      a {
        font-size: 15px;
        line-height: 16px;
        color: #333333;
      }
    }
  }

  &__bottom {
    margin-top: 48px;

    ul {
      display: flex;
      justify-content: space-between;

      a {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        color: #828282;
      }
    }
  }
}
</style>
