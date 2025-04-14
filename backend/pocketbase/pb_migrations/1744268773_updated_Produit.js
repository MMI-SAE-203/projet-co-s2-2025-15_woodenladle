/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3414971543",
    "maxSelect": 1,
    "name": "Categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Snak"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3414971543",
    "maxSelect": 1,
    "name": "Categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "choice1",
      "choice2"
    ]
  }))

  return app.save(collection)
})
