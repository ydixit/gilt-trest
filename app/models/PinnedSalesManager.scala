package models


import com.gilt.public.api.models.{SaleList, SaleDetail}

import scala.collection.mutable
import scala.concurrent.Future

/**
 * Rudimentary in-memory datastore with futures interface
 */
object PinnedSalesManager {
  val allPinnedSales = mutable.Map[String, mutable.Set[SaleDetail]]()

  def pinSale(username:String, sale: SaleDetail): Future[SaleDetail] = {
    if (!allPinnedSales.contains(username)) {
      allPinnedSales.update(username, mutable.Set[SaleDetail](sale))
    } else {
      val userPinnedSales = allPinnedSales.get(username).get
      userPinnedSales += sale
    }

    Future.successful(sale)
  }

  def getPinnedSales(username: String): Future[com.gilt.public.api.models.SaleList] = {
    val userPinnedSales = allPinnedSales.get(username).getOrElse(mutable.Set[SaleDetail]())
    Future.successful(SaleList(userPinnedSales.toSeq))
  }
}
