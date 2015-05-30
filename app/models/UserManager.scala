package models

import com.gilt.gilt.trest.v0.models.User

import scala.collection.mutable
import scala.concurrent.Future

/**
 * Rudimentary in-memory datastore with futures interface
 */
object UserManager {
  val registeredUsers = mutable.MutableList(User("otto", "otto@gilt.com"), User("kyle", "kdorman@gilt.com"), User("kevin", "kevin@gilt.com"))

  def getUserByUsername(username: String): Future[Option[User]] = {
    val userOpt = registeredUsers.find(user => user.username == username)
    Future.successful(userOpt)
  }

  def addUser(user: User): Future[User] = {
    registeredUsers += user
    Future.successful(user)
  }
}
