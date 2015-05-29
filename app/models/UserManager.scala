package models

import com.gilt.gilt.trest.v0.models.User

import scala.collection.mutable

/**
 * Rudimentary in-memory datastore
 */
object UserManager {
  val registeredUsers = mutable.MutableList(User("otto", "otto@gilt.com"), User("kyle", "kdorman@gilt.com"), User("kevin", "kevin@gilt.com"))

  def getUser(username: String) = {
    registeredUsers.find(user => user.username == username)
  }

  def addUser(user: User) = {
    registeredUsers += user
  }
}
