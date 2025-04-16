/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // add field
  collection.fields.addAt(8, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3812900375",
    "maxSize": 0,
    "name": "etapes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // remove field
  collection.fields.removeById("editor3812900375")

  return app.save(collection)
})
