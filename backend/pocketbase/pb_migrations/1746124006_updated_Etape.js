/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_584639538")

  // update collection data
  unmarshal({
    "name": "Etapes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_584639538")

  // update collection data
  unmarshal({
    "name": "Etape"
  }, collection)

  return app.save(collection)
})
