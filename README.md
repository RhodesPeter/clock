# Clock

Check out the time [here](https://rhodespeter.github.io/clock/)!

Built with vanilla JavaScript, no libraries or frameworks.<br>
SVG illustration designed in Adobe Illustrator. <br>
SVG optimised with [svg-optimiser](http://petercollingridge.appspot.com/svg-optimiser).

![](https://github.com/RhodesPeter/clock/blob/master/assets/illustration-for-readme.png)

### Key learnings:

Creating custom CSS transitions with the Chrome [cubic-bezier](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#The_cubic-bezier()_class_of_timing-functions) tool.

[This](http://cubic-bezier.com/#.17,.67,.83,.67) is also a great resource for getting the cubic-bezier values you want for a transitions.

1) Add the transition to your CSS.
2) Go to the Chrome dev tools and edit the cubic-bezier attribute.
3) Copy the cubic-bezier value from the dev tools into your code.

![](https://github.com/RhodesPeter/clock/blob/master/assets/cubic-bezier-for-readme.png)

```
.clock {
  transition: all 0.8s;
  transition-timing-function: cubic-bezier(0, 1.24, 0.99, 0.21);
}
```
