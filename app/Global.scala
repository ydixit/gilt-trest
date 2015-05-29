package app

import play.api._
import play.api.mvc._

object Global extends GlobalSettings {


  var apiKey: String = _
  var giltApiClient: com.gilt.public.api.Client = _

  override def onStart(app: Application) {
    apiKey = app.configuration.getString("application.gilt_api_key").get

    val url = app.configuration.getString("application.gilt_api_url").get
    giltApiClient = new com.gilt.public.api.Client(url)
  }

}