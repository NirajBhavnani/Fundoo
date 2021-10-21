<template>
  <div class="trash">
    <DashboardHeader />
    <div class="body-container">
      <SideBar />
      <div class="notes-container">
        <EmptyTrash />
        <Notes page="trash" />
      </div>
    </div>
  </div>
</template>

<script type="module" src="./Trash.js"></script>

<style lang="scss" scoped>
@import "./Trash";
</style>