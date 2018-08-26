# MongoDB Instructions

* Use database "nodeflix" (or whatever db name you've used)

   `use nodeflix`

* Create indexes:

   *
```
   db.listings.createIndex({title: "text", artist: "text", genre: "text", location: "text"})
```