---
home: false
title: 流式应答
---

# 流式应答

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stream Processing Demo</title>
</head>

<body>
  <div id="output"></div>

  <script>
    const longText = "这是 一个非 常长的文本，用 于演示流式应答的处理方式。";

    async function* processLongText(text) {
      const words = text.split(" ");

      for (const word of words) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Change the timeout duration
        yield word;
      }
    }

    async function handleStreamResponse() {
      const outputElement = document.getElementById("output");
      const asyncIterator = processLongText(longText);

      for await (const result of asyncIterator) {
        outputElement.innerHTML += result + " ";
      }

      outputElement.innerHTML += "<p>处理完成！</p>";
    }

    // Using window.onload to ensure all elements are loaded before executing
    window.onload = handleStreamResponse;
  </script>
</body>

</html>

```