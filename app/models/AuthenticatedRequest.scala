package models

import com.gilt.gilt.trest.v0.models.User
import play.api.mvc._
import play.api.mvc.Results._

import scala.concurrent.Future

case class AuthenticatedRequest[A](user: User, request: Request[A]) extends WrappedRequest[A](request)

/**
 * For simplicity sake, the user is "authenticated" by username alone
 */
object Authenticated extends ActionBuilder[AuthenticatedRequest] {
  def invokeBlock[A](request: Request[A], block: (AuthenticatedRequest[A]) => Future[Result]) = {
    request.headers.get("username").map { username =>
      UserManager.getUser(username).map { user =>
        block(AuthenticatedRequest(user, request))
      }.getOrElse {
        Future.successful(Forbidden)
      }
    } getOrElse {
      Future.successful(Forbidden)
    }
  }
}