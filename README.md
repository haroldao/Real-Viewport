# Real-Viewport
Avoid broken 100vh on mobile and more.... 

<br>
(try these demos on your mobile, any browser)<br>

[→ DEMO without the fix](https://vh-without-fix.haroldao.repl.co) <br>
[→ DEMO](https://test-real-vh-vw.haroldao.repl.co)


### Usage

`xx.css`

```
.example {
  height: calc(var(--vh, 1vh) * 100);
}
```
