//
//  ViewController.m
//  FlashSample
//
//  Created by Hadi Hatinoglu on 17/10/13.
//  Copyright (c) 2013 Baraansoft. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    UIWebView *webView=[[UIWebView alloc]initWithFrame:self.view.bounds];
    webView.delegate=self;
    webView.allowsInlineMediaPlayback=YES;

    int k=10;
    NSArray *arr=@[@"dsfdsf",@"gfdgf",@"dfsf",@"fdsds"];
    NSString *path=[[NSBundle mainBundle]pathForResource:@"01_04" ofType:@"html"];
    
    NSData *fileData = [NSData dataWithContentsOfFile: path];
    [webView loadData: fileData MIMEType: @"text/html" textEncodingName: @"UTF-8" baseURL: [NSURL fileURLWithPath: path]];
    NSString *htmlEncode=[NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
    
    NSLog(@"path is %@",path);
    [self.view addSubview:webView];

    //[webView loadHTMLString:htmlEncode baseURL:nil];
	// Do any additional setup after loading the view, typically from a nib.
}

#pragma mark webview delegates

-(void)webViewDidStartLoad:(UIWebView *)webView{
    
    NSLog(@"loading started");
}


-(void)webViewDidFinishLoad:(UIWebView *)webView{
    
    NSLog(@"loading finished");
    
}

-(void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error{
    NSLog(@"failed  with error %@",[error localizedDescription]);
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
