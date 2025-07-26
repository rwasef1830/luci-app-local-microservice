include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI support for a local microservice output in the dashboard
LUCI_DEPENDS:=+luci-base
PKG_LICENSE:=MIT

PKG_MAINTAINER:=Raif Atef <beliskner.github.3psil0n@neverbox.com>

include ../../luci.mk
