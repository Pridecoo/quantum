<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div>
          <a href="#">
            <img src="../../assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Instructions</a>
            </li>
            <li>
              <a href="#">Accounts</a>
            </li>
            <li>
              <a href="#">Platforms</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div id="header-right">
          <select name="lang" id="lang">
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>

          <base-button mode="small" link>Sign in for free</base-button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #fff;

  &__inner {
    display: flex;
    padding: 0;
    align-items: center;
    height: 80px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 500;
  }

  #header-right {
    margin-left: auto;
  }

  .container {
    padding: 0 60px 0 120px;
  }
}

ul {
  margin: 0 57px;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;

    a {
      font-weight: 500;
      font-size: 15px;
      line-height: 16px;
      color: #333333;
      transition: color 0.3s ease-in;

      &:hover {
        color: #356bf4;
      }
    }

    & + li {
      margin-left: 32px;
    }
  }
}

select {
  width: 80px;
  height: 40px;
  padding: 0 16px;
  margin-right: 24px;
  font-family: 'Museo Sans Cyrl';
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  background-image: url('../../assets/images/arrow.svg');
  background-repeat: no-repeat;
  background-size: 9.2px auto;
  background-position: 49.4px center;
  border: 1px solid #000;
  border-radius: 60px;
  appearance: none;
}
</style>
