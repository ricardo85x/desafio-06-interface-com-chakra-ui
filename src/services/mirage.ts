import { createServer } from "miragejs"

import continentsMock from "../continents.json"


export const mirageServer = () => createServer({
    routes() {
      this.get("/api/continents", () => ({
        continents: continentsMock,
      })) 
  
      // resets the namespace to the root
      this.namespace = ""
      this.passthrough() 
  
    },
})