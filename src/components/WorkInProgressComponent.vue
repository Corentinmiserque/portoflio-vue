<template>
    <section class="banner">
        <nav class="menu">
  <div class="menu__item">
    <div class="marquee">
      <div class="marquee__inner">
        <span>work in progress</span>
        <span>.</span>
       <span>work in progress</span>
        <span>.</span>
       <span>work in progress</span>
        <span>.</span>
        <span>work in progress</span>
        <span>.</span>

      </div>
    </div>
  </div>
</nav>
    </section>
  </template>
  
  <script>

  </script>
  
  <style scoped lang="scss">

.banner{
    border-bottom: solid 0.5px;
    height: fit-content;
    padding: 0;
    overflow: hidden;
}
.menu {

	--marquee-width: 100vw;
	--offset: 20vw;
	--move-initial: calc(-25% + var(--offset));
	--move-final: calc(-50% + var(--offset));
	--item-font-size: 5vw;
	counter-reset: menu;
}

/* Make sure 3 items are visible in the viewport by setting suitable font size. */

.marquee {

	width: var(--marquee-width);
	overflow: hidden;
	pointer-events: none;
}

.marquee__inner {
	width: fit-content;
	display: flex;
	transform: translate3d(var(--move-initial), 0, 0);
	animation: marquee 25s linear infinite;
	animation-play-state: paused;
	opacity: 0;
	transition: opacity 0.1s;
}

.marquee .marquee__inner {
	animation-play-state: running;
	opacity: 1;
	transition-duration: 0.4s;
}

.marquee span {
  text-align: center;
	white-space: nowrap;
	font-size: var(--item-font-size);
	padding: 0 1.5vw;
	font-weight: 400;
    color: #1FFF1B;
}


@keyframes marquee {
	0% {
		transform: translate3d(var(--move-initial), 0, 0);
	}

	100% {
		transform: translate3d(var(--move-final), 0, 0);
	}
}

  </style>
  