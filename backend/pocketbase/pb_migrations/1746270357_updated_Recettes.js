/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // remove field
  collection.fields.removeById("editor3455884952")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number2984597081",
    "max": null,
    "min": null,
    "name": "nbr_pers",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1264587087",
    "maxSize": 0,
    "name": "ingredients",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // add field
  collection.fields.addAt(7, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3455884952",
    "maxSize": 0,
    "name": "Ingredients",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // remove field
  collection.fields.removeById("number2984597081")

  // remove field
  collection.fields.removeById("editor1264587087")

  return app.save(collection)
})
