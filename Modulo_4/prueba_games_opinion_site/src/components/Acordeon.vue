<template>
    <div class="accordion mb-3" role="tablist">
    <b-card no-body class="mb-1">
      <b-button block v-b-toggle="'accordion-'+opinion.id" variant="info" class="text-left">
        Opinión creada por: {{ opinion.usuario}}. Para el juego: {{ opinion.game }}
      </b-button>
      <b-collapse v-bind:id="'accordion-'+opinion.id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><span class="negrita">Opinión:</span> {{ opinion.opinion }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </div>
</template>

<script>

export default {
    name: "Acordeon",
    props: ["opinion"],
}
</script>
<style scoped>
    .btn {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .btn-info {
      background-color: #e7f1ff;
      color: #0c63e4;
      border: none;
      padding: .8rem 1.5rem;
    }
    button.btn-info:not(:disabled):not(.disabled):active {
      background-color: #e7f1ff;
      color: #0c63e4;
      box-shadow: none;
    }
    .negrita {
      font-weight: bold;
    }
</style>