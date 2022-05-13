#import <objc/NSObject.h>


@interface UIView ()
- (UIViewController*)_viewControllerForAncestor;
@property(nonatomic, readwrite) UIView* overlayView;
@property(nonatomic, readwrite) UIView* playerBar;
@property(nonatomic, readwrite) UILabel* durationLabel;
@property(nonatomic, readwrite) UIWebView *webView;
@property(nonatomic, readwrite) UIWebView *webViewDelegate;
@end

@interface  YTSearchResultsViewController : UIViewController <UIWebViewDelegate>
@property (strong, nonatomic) IBOutlet UIWebView *webView;
@end

@interface  YTGuideResponseViewController : UIViewController <UIWebViewDelegate>
@property (strong, nonatomic) IBOutlet UIWebView *webView;
@end

@interface ViewController : UIViewController <UIWebViewDelegate>
@end

@interface YTPushNotificationController : UIViewController <UIWebViewDelegate>
@property (strong, nonatomic) IBOutlet UIWebView *webView;
@end
