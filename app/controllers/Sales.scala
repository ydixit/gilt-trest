package controllers


import models.{Authenticated, PinnedSalesManager}
import play.api._
import play.api.mvc._
import play.api.libs.json.Json
import scala.concurrent.ExecutionContext.Implicits.global
import app.Global._
import com.gilt.public.api.models.json._

import scala.concurrent.Future


object Sales extends Controller {

  def getByStore(store: String) = Authenticated.async { request =>
    val result = giltApiClient.SaleList.getSalesAndUpcomingJsonByStore(store, apiKey)
    result.map(saleList => Ok(Json.toJson(saleList)))
  }

  def getPinned() = Authenticated.async { request =>
    PinnedSalesManager.getPinnedSales(request.user.username).map{ saleList =>
      Ok(Json.toJson(saleList))
    }
  }

  def getPinBySaleKey(saleKey: String) = Authenticated.async { request =>
    val salesFuture = giltApiClient.SaleList.getSalesAndUpcomingJson(apiKey)
    salesFuture.flatMap{ saleList =>
      val saleOpt = saleList.sales.find(saleDetail => saleDetail.saleKey == saleKey)
      saleOpt.map { sale =>
        PinnedSalesManager.pinSale(request.user.username, sale).map(sale => Ok(Json.toJson(sale)))
      }.getOrElse(Future.successful(NotFound))
    }
  }

}