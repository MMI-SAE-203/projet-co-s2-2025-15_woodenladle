/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select147780672",
    "maxSelect": 1,
    "name": "Region",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Afrique du Nord"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select147780672",
    "maxSelect": 1,
    "name": "Region",
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
