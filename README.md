rework-math
=============

Do some math in your [Rework](https://github.com/visionmedia/rework) CSS files.

```css
div {
  padding: math(5+5px);
}
```

yields:

```css
div {
  padding: 10px;
}
```

### using [rework-vars](https://github.com/visionmedia/rework-vars)

```css
:root {
  var-fontSize: 10px;
}

div {
  padding: math((var(fontSize) * 2) + 10px);
}
```

yields:

```css
:root {
  var-fontSize: 10px;
}

div {
  padding: 30px;
}
```

Of course using rework-vars requires you to run the vars function first.

### Rendering the correct units

Just add the unit you want at the end of the function. Like so:

```css
.header {
  font-size: math(2 * 14px);
}
```

yields:

```css
.header {
  font-size: 28px;
}
```

### How about Percent?!

Ummm, not ready yet! Right now you will have to divide any number that needs to be a percent by 100. So in the following example you want to know what 33% of 100 is. You need to multiply 100 by 0.33%. We add the `%` so that we get the right unit at the end.

```css
.span33 {
  width: math(100 * 0.33333333%);
}
```

yields:

```css
.span33 {
  width: 33.333332999999996%;
}
```

# License

  MIT
