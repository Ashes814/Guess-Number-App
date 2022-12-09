# 用js制作一个猜数字app

**成品地址：**[https://oo-guessing-number.netlify.app](https://oo-guessing-number.netlify.app/)

# 1.项目初始化

## 1.1. 环境准备

- 硬件
    - MacBook Pro (M1 Pro + 16GB RAM + 1TB SSD)
- 操作系统
    - macOS Ventura 12.0.1
- 开发环境
    - vscode
    - Chrome
    - parcel

## 1.2. 文件准备

![Untitled](%E7%94%A8js%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%8C%9C%E6%95%B0%E5%AD%97app%202d47d5da1ce545309dcc59d3f8f6d302/Untitled.png)

- 创建项目文件夹
    - index.html + style.css + script.js
    - 在GitHub上部署
- 安装parcel
    
    ```bash
    npm install parcel
    ```
    
- 配置`package.json`
    
    ![Untitled](%E7%94%A8js%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%8C%9C%E6%95%B0%E5%AD%97app%202d47d5da1ce545309dcc59d3f8f6d302/Untitled%201.png)
    
- 运行live server
    
    ```bash
    npm start
    ```
    

# 2.制作HTML

本项目仅需要一个index.html即可

- 初始化

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>欧欧猜数字</title>
  </head>
</html>
```

- 制作标题栏

```html
<body>
    <header>
      <h1>猜猜欧欧想了什么数字！</h1>
      <p class="between">(是一个1-20之间的数字）</p>
      <button class="btn again">再来一次！</button>
      <div class="number">?</div>
    </header>
  </body>
```

![Untitled](%E7%94%A8js%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%8C%9C%E6%95%B0%E5%AD%97app%202d47d5da1ce545309dcc59d3f8f6d302/Untitled%202.png)

- 制作游戏主体

```html
<main>
      <section class="left">
        <input type="number" class="guess" />
        <button class="btn check">检查！</button>
      </section>
      <section class="right">
        <p class="message">开始猜数字……</p>
        <p class="label-score">💯 得分:<span class="score">20</span></p>
        <p class="label-highscore">
          🥇 最高分:<span class="highscore">0</span>
        </p>
      </section>
    </main>
```

![Untitled](%E7%94%A8js%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%8C%9C%E6%95%B0%E5%AD%97app%202d47d5da1ce545309dcc59d3f8f6d302/Untitled%203.png)

- 完整代码

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>欧欧猜数字</title>
  </head>
  <body>
    <header>
      <h1>猜猜欧欧想了什么数字！</h1>
      <p class="between">(是一个1-20之间的数字）</p>
      <button class="btn again">再来一次！</button>
      <div class="number">?</div>
    </header>
    <main>
      <section class="left">
        <input type="number" class="guess" />
        <button class="btn check">检查！</button>
      </section>
      <section class="right">
        <p class="message">开始猜数字……</p>
        <p class="label-score">💯 得分:<span class="score">20</span></p>
        <p class="label-highscore">
          🥇 最高分:<span class="highscore">0</span>
        </p>
      </section>
    </main>
    <script src="script.js"></script>
  </body>
</html>
```

# 3. 制作css

- 导入字体
    - 使用zcool快乐体

```css
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=ZCOOL+KuaiLe&display=swap");

```

- 制作css

```css
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=ZCOOL+KuaiLe&display=swap");

/* Initialize */
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: "ZCOOL KuaiLe", sans-serif;
  color: #eee;
  background-color: #222;
}

/* LAYOUT */
header {
  position: relative;
  height: 35vh;
  border-bottom: 7px solid #eee;
}

main {
  height: 65vh;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left {
  width: 52rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right {
  width: 52rem;
  font-size: 3rem;
}

/* ELEMENT STYLE */
h1 {
  font-size: 4rem;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.number {
  background: #eee;
  color: #333;
  font-size: 6rem;
  width: 15rem;
  padding: 3rem 0rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.between {
  font-size: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.again {
  position: absolute;
  top: 2rem;
  left: 2rem;
}

.guess {
  background: none;
  border: 4px solid #eee;
  font-family: inherit;
  color: inherit;
  font-size: 5rem;
  padding: 2.5rem;
  width: 25rem;
  text-align: center;
  display: block;
  margin-bottom: 3rem;
}

.btn {
  border: none;
  background-color: #eee;
  color: #222;
  font-size: 2.4rem;
  font-family: inherit;
  padding: 2rem 3rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
}

.message {
  margin-bottom: 8rem;
  height: 3rem;
}

.label-score {
  margin-bottom: 2rem;
}
```

![Untitled](%E7%94%A8js%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%8C%9C%E6%95%B0%E5%AD%97app%202d47d5da1ce545309dcc59d3f8f6d302/Untitled%204.png)

# 4.制作javascript

- 生成随机数（1-20之间），通过`Math.random()`创建0-1之间的随机数，将它乘以20，得到0-20之间的随机数，通过`Math.trunc()`去除小数部分得到0-19之间的整数，加一即可

```jsx
let secretNumber = Math.trunc(Math.random() * 20) + 1;
```

- 创建展示信息message的函数，利用`document.querySelector(".message")`选中标签，利用其`textContent`属性改变内容

![Untitled](%E7%94%A8js%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%8C%9C%E6%95%B0%E5%AD%97app%202d47d5da1ce545309dcc59d3f8f6d302/Untitled%205.png)

```jsx
const displayMessage = function (message) {
  /*
   *@message {string} message - the message to show in the right side of the app
   */
  document.querySelector(".message").textContent = message;
};
```

- 创建初始化函数，用于设定初始值

```jsx
const init = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("猜猜我是几……");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};
```

- 创建检查数字的功能

```jsx
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("🤔 我怀疑你没输入数字");

    // When Players wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 你是对的，666");
    document.querySelector(".number").textContent = secretNumber;

    // change background color
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 太高了吧！"
          : "📉 你这猜的比马里亚纳海沟还低呢!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 你挂了，小菜鸡😁!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
```

- 完整代码

```jsx
"use strict";

let secretNumber;
let score;
let highscore = 0;

const displayMessage = function (message) {
  /*
   * @message {string} message - the message to show in the right side of the app
   */
  document.querySelector(".message").textContent = message;
};

const init = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("猜猜我是几……");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};
init();

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("🤔 我怀疑你没输入数字");

    // When Players wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 你是对的，666");
    document.querySelector(".number").textContent = secretNumber;

    // change background color
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 太高了吧！"
          : "📉 你这猜的比马里亚纳海沟还低呢!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 你挂了，小菜鸡😁!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Implement the again button
document.querySelector(".again").addEventListener("click", function () {
  init();
});
```

# 4.在netlify上部署

- 修改`package.json`

![Untitled](%E7%94%A8js%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%8C%9C%E6%95%B0%E5%AD%97app%202d47d5da1ce545309dcc59d3f8f6d302/Untitled%206.png)

- 部署