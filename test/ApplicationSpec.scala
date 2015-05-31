import com.gilt.gilt.trest.v0.models.User
import models.UserManager
import org.specs2.mutable._
import org.specs2.runner._
import org.junit.runner._

import play.api.test._
import play.api.test.Helpers._

import scala.concurrent.Await
import scala.concurrent.duration._

/**
 * Add your spec here.
 * You can mock out a whole application including requests, plugins etc.
 * For more information, consult the wiki.
 */
@RunWith(classOf[JUnitRunner])
class ApplicationSpec extends Specification {
  "UserManager" should {
    "return the user by username" in {
      val user = Await.result(UserManager.getUserByUsername("otto"), Duration.Inf)
      user.get.email must equalTo("otto@gilt.com")
    }
  }

  "Application" should {

    "send 404 on a bad request" in new WithApplication{
      route(FakeRequest(GET, "/boum")) must beNone
    }

    "render the index page" in new WithApplication{
      val home = route(FakeRequest(GET, "/")).get

      status(home) must equalTo(OK)
      contentType(home) must beSome.which(_ == "text/html")
    }
  }
}
