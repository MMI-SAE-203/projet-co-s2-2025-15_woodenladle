/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_584639538")

  // remove field
  collection.fields.removeById("number2285113534")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_584639538")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number2285113534",
    "max": null,
    "min": null,
    "name": "nbr_etape",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
