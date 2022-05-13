ARCHS = armv7
TARGET := iphone:clang:latest:7.0

include $(THEOS)/makefiles/common.mk

BUNDLE_NAME = VerduraiOSPreferences

VerduraiOSPreferences_FILES = YRPRootListController.m
VerduraiOSPreferences_FRAMEWORKS = UIKit
VerduraiOSPreferences_PRIVATE_FRAMEWORKS = Preferences
VerduraiOSPreferences_EXTRA_FRAMEWORKS = Cephei CepheiPrefs
VerduraiOSPreferences_INSTALL_PATH = /Library/PreferenceBundles
VerduraiOSPreferences_CFLAGS = -fobjc-arc

include $(THEOS_MAKE_PATH)/bundle.mk
