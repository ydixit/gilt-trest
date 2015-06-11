import com.typesafe.sbt.SbtNativePackager._
import com.typesafe.sbt.packager.Keys._

name := "gilt-trest"

version := "1.0-SNAPSHOT"


dockerRepository := Some("teamrookie")
maintainer in Docker := "team-rookie <team-rookie@gilt.com>"
dockerBaseImage := "java:8-jre"
dockerExposedPorts := Seq(9000)
version := "git describe --tags --dirty --always".!!
  .stripPrefix("v").trim


lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  ws
)
