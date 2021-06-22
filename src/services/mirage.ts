import { createServer } from "miragejs"

import continentsMock from "../continents.json"
import rankMock from "../rankCities.json"


export const mirageServer = () => createServer({
    routes() {
      this.get("/api/continents", () => ({
        continents: continentsMock,
      })) 

      this.get("/api/rank", () => ({
        rank: rankMock,
      })) 
  
      // resets the namespace to the root
      this.namespace = ""
      this.passthrough() 
  
    },
})