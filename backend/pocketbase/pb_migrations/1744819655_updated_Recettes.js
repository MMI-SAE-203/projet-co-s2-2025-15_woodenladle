/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select147780672",
    "maxSelect": 1,
    "name": "Region",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Afrique du Nord",
      "Afrique Central",
      "Europe Est",
      "Amerique Latine"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // remove field
  collection.fields.removeById("select147780672")

  return app.save(collection)
})
