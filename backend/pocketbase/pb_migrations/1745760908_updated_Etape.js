/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_584639538")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1383128419",
    "hidden": false,
    "id": "relation1237017488",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "recette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_584639538")

  // remove field
  collection.fields.removeById("relation1237017488")

  return app.save(collection)
})
