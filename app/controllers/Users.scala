package controllers

import com.gilt.gilt.trest.v0.models.User
import models.{UserManager, Authenticated}
import play.api._
import play.api.mvc._
import play.api.libs.json.Json
import scala.concurrent.ExecutionContext.Implicits.global
import com.gilt.public.api.models.json._
import com.gilt.gilt.trest.v0.models.json._


object Users extends Controller {

  def postRegister() = Action(parse.json[User]) { request =>
    val user = request.body
    UserManager.addUser(user)
    Created(Json.toJson(user))
  }

  def postLogin() = Action {
    NotImplemented
  }

}