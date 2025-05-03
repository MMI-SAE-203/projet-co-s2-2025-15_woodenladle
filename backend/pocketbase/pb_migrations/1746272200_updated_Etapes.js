/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_584639538")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2248837363",
    "max": 0,
    "min": 0,
    "name": "Etape_4",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4044208229",
    "max": 0,
    "min": 0,
    "name": "Etape_5",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1745152479",
    "max": 0,
    "min": 0,
    "name": "Etape_6",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_584639538")

  // remove field
  collection.fields.removeById("text2248837363")

  // remove field
  collection.fields.removeById("text4044208229")

  // remove field
  collection.fields.removeById("text1745152479")

  return app.save(collection)
})
