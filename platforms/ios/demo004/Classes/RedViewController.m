//
//  RedViewController.m
//  demo004
//
//  Created by 高庆华 on 2017/2/24.
//
//

#import "RedViewController.h"

@interface RedViewController ()

@end

@implementation RedViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    [self configUI];
}

- (void)configUI {
    self.navigationItem.title = @"我是原生页面";
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [self.view addSubview:btn];
    
    btn.frame = CGRectMake(20, 100, 250, 50);
    [btn setBackgroundColor:[UIColor blueColor]];
    [btn addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
    [btn setTitle:@"返回ionic并push到下一个页面" forState:UIControlStateNormal];
}

- (void)btnClick {
    NSDictionary *userInfo = @{@"key": @"value"};

    [self dismissViewControllerAnimated:true completion:^{
            [[NSNotificationCenter defaultCenter] postNotificationName:@"nativeToJs" object:nil userInfo: userInfo];
    }];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
