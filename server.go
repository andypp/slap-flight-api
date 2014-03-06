package main

import (
  "github.com/codegangsta/martini"
  "github.com/codegangsta/martini-contrib/render"
  "log"
  "net/http"
)

func main() {
  m := martini.Classic()
  m.Use(render.Renderer())

  m.Get("/api/v1/trips", func(req *http.Request, r render.Render) {
    walk := req.URL.Query().Get("walk")
    log.Print("Walk: " + walk)
    if (walk == "lele") {
      r.JSON(200, map[string]interface{}{
        "trips": []interface{}{
          map[string]interface{}{
            "id": 1,
            "airline": "airasia",
            "origin": "SIN",
            "destination": "DPS",
            "isPromo": true,
            "flights": []int{1, 2},
            "price": 160.5,
          },
          map[string]interface{}{
            "id": 2,
            "airline": "jetstar",
            "origin": "SIN",
            "destination": "DPS",
            "price": 150.0,
          },
        },
        "flights": []interface{}{
          map[string]interface{}{
            "id": 1,
            "trip": 1,
            "code": "AK169",
            "origin": "SIN",
            "destination": "DPS",
            "departDate": "2014-01-01T16:00:00",
            "arriveDate": "2014-01-01T19:00:00",
          },
          map[string]interface{}{
            "id": 2,
            "trip": 1,
            "code": "AK172",
            "origin": "DPS",
            "destination": "SYD",
            "departDate": "2014-01-01T20:00:00",
            "arriveDate": "2014-01-01T22:00:00",
          },
        },
      })
    } else {
      r.JSON(200, map[string]interface{}{
        "trips": []interface{}{
          map[string]interface{}{
            "id": 3,
            "airline": "airasia",
            "origin": "DPS",
            "destination": "SIN",
            "flights": []int{3},
            "price": 130.5,
          },
          map[string]interface{}{
            "id": 4,
            "airline": "jetstar",
            "origin": "DPS",
            "destination": "SIN",
            "flights": []int{4},
            "price": 50.0,
          },
        },
        "flights": []interface{}{
          map[string]interface{}{
            "id": 3,
            "trip": 3,
            "code": "AK169",
            "origin": "SIN",
            "destination": "DPS",
            "departDate": "2014-01-01T16:00:00",
            "arriveDate": "2014-01-01T19:00:00",
          },
          map[string]interface{}{
            "id": 4,
            "trip": 4,
            "code": "AK172",
            "origin": "DPS",
            "destination": "SYD",
            "departDate": "2014-01-01T20:00:00",
            "arriveDate": "2014-01-01T22:00:00",
          },
        },
      })
    }
  })

  m.Get("/api/v1/airports", func(req *http.Request, r render.Render) {
    origin := req.URL.Query().Get("orig")
    if (origin == "") {
      r.JSON(200, map[string]interface{}{
        "airports": []interface{}{
          map[string]interface{}{
            "id": "SIN",
            "description": "Singapore",
            "country": "SG",
          },
          map[string]interface{}{
            "id": "DPS",
            "description": "Denpasar",
            "country": "ID",
          },
        },
      })
    } else if (origin == "SIN") {
      r.JSON(200, map[string]interface{}{
        "airports": []interface{}{
          map[string]interface{}{
            "id": "DPS",
            "description": "Denpasar",
            "country": "ID",
          },
        },
      })
    } else if (origin == "DPS") {
      r.JSON(200, map[string]interface{}{
        "airports": []interface{}{
          map[string]interface{}{
            "id": "SIN",
            "description": "Singapore",
            "country": "ID",
          },
        },
      })
    } else {
      r.JSON(200, map[string]interface{}{
        "airports": []interface{}{},
      })
    }
  })
  m.Run()
}
