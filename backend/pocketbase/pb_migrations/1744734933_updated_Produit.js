/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2621874111",
    "hidden": false,
    "id": "relation2952938981",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Fournisseur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // remove field
  collection.fields.removeById("relation2952938981")

  return app.save(collection)
})
