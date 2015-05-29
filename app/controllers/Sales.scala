package controllers


import models.{Authenticated}
import play.api._
import play.api.mvc._
import play.api.libs.json.Json
import scala.concurrent.ExecutionContext.Implicits.global
import app.Global._
import com.gilt.public.api.models.json._


object Sales extends Controller {

  def getByStore(store: String) = Authenticated.async { request =>
    val result = giltApiClient.SaleList.getSalesAndUpcomingJsonByStore(store, apiKey)
    result.map(saleList => Ok(Json.toJson(saleList)))
  }

  def getPinned() = Action {
    NotImplemented
  }

  def postPinBySaleKey(sale_key: String) = Action {
    NotImplemented
  }

}