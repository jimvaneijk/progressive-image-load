# Progressive image load

[![npm](https://img.shields.io/npm/dt/progressive-image-load.svg)](https://www.npmjs.com/package/progressive-image-load) 
![GitHub issues](https://img.shields.io/github/issues/jimvaneijk/progressive-image-load.svg)
![GitHub](https://img.shields.io/github/license/jimvaneijk/progressive-image-load.svg)
![GitHub](https://img.shields.io/badge/dutch%20made-100%25-orange.svg)

<img src="example.gif">


`npm i progressive-image-load --save`

#### JS

* Import js
```
import ProgressiveImageLoad from 'progressive-image-load';

window.onload = ProgressiveImageLoad();
```

* HTML
```
<script>
    const ProgressiveImageLoad = require('progressive-image-load');
    window.onload = ProgressiveImageLoad();
</script>
```

#### CSS

* Import scss
```
@import '~/progressive-image-load/scss/progressiveimageload';
```


#### HTML

```
<section class="blur-image-load" data-large="big-image.jpg">
    <img src="small-image.jpg" class="blur-image"/>
    <div style="padding-bottom:66,7%"></div>
</section>
```
