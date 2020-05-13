# Front End Showdown

This app will demonstrate the same image search application written in various
popular libaries, along with very minimal version written with TypeScript in preparation for an upcoming talk and for a good learning experience 👍🥳

All examples will use the same HTML snippet for consistency

```html
<h1>Image Search</h1>
<form>
  <label for="searchTerm">Search Term</label>
  <input class="u-full-width" type="text" id="searchTerm" name="searchTerm" />
  <button type="submit">Search</button>
</form>
<img id="loadingImage" src="https://i.imgur.com/LVHmLnb.gif" />
<section class="images">
  <!-- images loaded dynamically here -->
</section>
```

---

## Styling

All examples will use the skeleton css framework

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">`

And use these app specific style rules

```css
body {
  width: 80%;
  margin: 2em auto 0 auto;
}

.images {
  column-count: 3;
}

img {
  width: 100%;
}

@media (max-width: 1200px) {
  .images {
    column-count: 2;
  }
}

@media (max-width: 800px) {
  .images {
    column-count: 1;
  }
}
```
