import { Controller } from "@hotwired/stimulus"
import { FetchRequest } from '@rails/request.js'

export default class extends Controller {
  connect() {
    console.log("Connected")
  }

  triggerCritical() {
    throw new Error("test")
  }

  async triggerRequest() {
    const request = new FetchRequest("post", "/create", {
      responseKind: 'json',
      body: JSON.stringify({ 
        cheese_burgers: 1,
        veggie_burgers: 2
      })
    })
    const response = await request.perform()
  }
}