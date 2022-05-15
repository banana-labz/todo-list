<div class="layout" style="--width: 340px">
  <slot/>
</div>

<style>
  .layout {
    margin: auto;
    padding-top: 10px;

    padding-left: calc((100% - var(--width)) / 2);
    padding-right: calc((100% - var(--width)) / 2);
    width: var(--width);
  }
</style>