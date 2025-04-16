/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // remove field
  collection.fields.removeById("number1474119008")

  // remove field
  collection.fields.removeById("select147780672")

  // remove field
  collection.fields.removeById("relation3613248083")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number2276825860",
    "max": null,
    "min": null,
    "name": "nbr_personne",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number1474119008",
    "max": null,
    "min": null,
    "name": "Prix",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
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

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2001447505",
    "hidden": false,
    "id": "relation3613248083",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Produit_need",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("number2276825860")

  // remove field
  collection.fields.removeById("editor3455884952")

  return app.save(collection)
})
