/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("number3355341491")

  // remove field
  collection.fields.removeById("select2052025195")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number3355341491",
    "max": null,
    "min": null,
    "name": "Telephone",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select2052025195",
    "maxSelect": 1,
    "name": "Abonnement",
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
