<template>
  <div class="wrapper">
    <header class="header">
      <slot name="header" />
    </header>
    <main class="main">
      <slot name="main" />
    </main>
    <aside class="sidebar">
      <slot name="sidebar" />
    </aside>
  </div>
  <footer class="footer">
    <slot name="footer" />
  </footer>
</template>

<style>
.header {
  border: 2px solid purple;
}
.sidebar {
  border: 2px solid red;
  float:right;
}

.main {
  border: 2px solid green;
  float:left;
}

.footer {
  border: 2px solid blue;
}
</style>
