TARGET := iphone:clang:latest:7.0
INSTALL_TARGET_PROCESSES = YouTube
GO_EASY_ON_ME = 1
FINALPACKAGE = 1 

export ARCHS = armv7 arm64
include $(THEOS)/makefiles/common.mk

TWEAK_NAME = VerduraiOS
$(TWEAK_NAME)_FILES = Tweak.xm
$(TWEAK_NAME)_CFLAGS = -fobjc-arc
$(TWEAK_NAME)_FRAMEWORKS = UIKit Foundation MobileCoreServices SystemConfiguration Security JavaScriptCore Cephei
$(TWEAK_NAME)_PRIVATE_FRAMEWORKS = MediaRemote MobileCoreServices SystemConfiguration Security JavaScriptCore Cephei
$(TWEAK_NAME)_EXTRA_FRAMEWORKS += Cephei

include $(THEOS_MAKE_PATH)/tweak.mk

SUBPROJECTS += prefs

after-install::
	install.exec "killall -9 SpringBoard"

include $(THEOS_MAKE_PATH)/aggregate.mk

