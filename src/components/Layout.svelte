<div class="root">
  <div class="main">
    <slot/>
  </div>
</div>
<style>
  .main {
    width: 340px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .root {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
  }
</style>