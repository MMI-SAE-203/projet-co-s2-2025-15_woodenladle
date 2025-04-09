/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1411584853",
        "max": 0,
        "min": 0,
        "name": "Nom",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
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
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3950563313",
        "max": 0,
        "min": 0,
        "name": "Description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file83635035",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "Image",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "hidden": false,
        "id": "number1409762727",
        "max": null,
        "min": null,
        "name": "Temps_prepar",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1383128419",
    "indexes": [],
    "listRule": null,
    "name": "Recettes",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419");

  return app.delete(collection);
})
